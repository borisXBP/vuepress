# Angular

作为“为大型前端项目”而设计的前端框架，Angular 其实有许多值得参考和学习的设计，本系列主要用于研究这些设计和功能的实现原理。本文围绕 Angular 的核心功能 Ivy 编译器，介绍其中变更检测的过程。

介绍 Ivy 编译器中使用了增量 DOM 的设计。在 Ivy 中，通过编译器将模板编译为`template`渲染函数，该过程会将对模板的解析编译成增量 DOM 相关的指令。其中，在`elementStart()`执行时，我们可以看到会通过`createElementNode()`方法来创建 DOM。

而增量 DOM 中的变更检测、Diff 和更新 DOM 等能力，都与`elementStart()`方法紧紧关联着。

默认情况下，所有异步操作都在 Angular Zone 内。该逻辑在创建 Angular 应用的时候便已添加，这会自动触发变更检测：

```js
@Injectable()
export class ApplicationRef {
  ...
  constructor(
      private _zone: NgZone, private _injector: Injector, private _exceptionHandler: ErrorHandler,
      private _componentFactoryResolver: ComponentFactoryResolver,
      private _initStatus: ApplicationInitStatus) {

    this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({
      next: () => {
        this._zone.run(() => {

          this.tick();
        });
      }
    });
  }
}
```

### [#](http://www.godbasin.com/angular/deep-into-angular/angular-design-0-prestart.html#%E4%BD%8E%E7%83%AD%E5%BA%A6%E7%9A%84-angular) 低热度的 Angular

作为三大前端框架之一，Angular 在国内的热度实在是低。个人认为原因包括：

- AngularJS 到 Angular2 的断崖式升级，失去了很多开发者的信任
- Angular 除了依赖注入（Provider/Service）、指令/管道等功能设计，在断崖升级时引入的 Typescript/Decorator/模块化组织/AOT/JIT 等新的能力，对当时大多数前端开发带来了不少的学习门槛
- Angular 针对大型应用而引入的设计和功能，对于大多数前端应用来说无法物尽其用，反而增加了学习成本
- Angular 提供了一整套完整的解决方案，反而不像 Vue/React 等库灵活，可以随意搭配其他的状态管理、构建库等（其实也是可以的，可能成本和门槛会高一些），显得笨重

由于以上原因，大家在选框架的时候常常讨论的是用 React 还是 Vue，虽然同样作为热门框架，Angular 似乎在无形中就被大家排除在外。使用 Angular 框架的人越少，相关的中文相关的文档和教程也会很少，大家对它的了解和认知都容易不够全面。

其实，很多人会问我喜欢 React 还是 Vue，我总会告诉他们我喜欢 Angular，他们也总会觉得很奇怪哈哈哈哈。实际上，AngularJS 是我最早接触的一个前端框架，我也曾经使用过断崖式升级的 Angular2，它们带给我的除了很多未知的知识和领域，还有拓宽了我对前端编程的一些认知。我想，喜欢 Angular，也可能是因为有一些缘分在内的原因叭~

## [#](http://www.godbasin.com/angular/deep-into-angular/angular-design-0-prestart.html#angular-%E6%A1%86%E6%9E%B6%E8%A7%A3%E8%AF%BB) Angular 框架解读

源码阅读对很多人来说，都是一件挑战很大的事情，对我来说也一样。

虽然我有较多地阅读过 Vue 的源码（可参考[《深入理解 Vue.js 实战》 (opens new window)](http://www.godbasin.com/vue-ebook/)这本书），但前提是我对这个框架有足够多的理解和使用经验，在尝试介绍和解说时，也更是倾向使用者的角度来进行。而对于 React，则是因为理解和使用经验的缺乏，未曾有机会深入地去了解它，但也有阅读过写得不错的源码解读（可参考[《React 技术揭秘》 (opens new window)](https://github.com/BetaSu/just-react)一书）。

对于阅读源码来说，最好的方式便是从已知的理解和认知中开始。阅读源码，并不是为了熟悉掌握源码本身，更是为了掌握其中的一些值得借鉴的思考方式和设计，因此我也尽可能减少代码占据的篇幅，使用自己理解后的方式来进行描述。

那么，后面我会从自己认为最值得参考和学习的地方开始，一点点学习其中的精华。以我当前有限的认知，大概会包括以下内容：

- 依赖注入整体框架的设计
- 组件设计与管理
- Provider 与 Service 的设计
- NgModule 模块化组织（多级/分层）的设计
- 模板引擎/模板编译过程的整体设计
- Zone 设计：提升计算速度
- JIT/AOT 设计
- 元数据设计：（`Reflect.metadata`）的引入和使用思考
- 响应式编程：Rxjs 的引入和使用思考

在时隔 3 年之后再次接触 Angular，还是直接以阅读源码的方式来进行，对我来说是个不小的挑战。但这些年来，我也一直在尝试做各种不同的新的事情，如果因为觉得困难而放弃，那么这个天花板便是我自身，而不是什么“环境所迫”、“没有时间”这样的借口。或许我会写得很慢，但我依然希望自己能一点点去细细钻研，也希望至少以上的内容能最终掌握。

这是一个大工程，因为我写下这篇文章来给自己预热，也希望能打打气，更是尝试立下一个 FLAG 吧。

<script>
    window.onload = function() {
        let footer = document.getElementsByClassName('comments-wrapper')[0];
    footer.style.textAlign = 'center'
    footer.innerHTML = '© 2022 Boris 个人网站 | <a href="https://beian.miit.gov.cn" target="_blank" >粤ICP备20061538号</a> | 保留所有权利' 
    }

    setInterval(() => {
        let footer = document.getElementsByClassName('comments-wrapper')[0];
        if(footer?.innerHTML.length === 7){
                    footer.style.textAlign = 'center'
    footer.innerHTML = '© 2022 Boris 个人网站 | <a href="https://beian.miit.gov.cn" target="_blank" >粤ICP备20061538号</a> | 保留所有权利' 
        }
    }, 500);
</script>
