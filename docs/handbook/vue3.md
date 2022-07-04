# Vue3

待更新...

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
