window.onload = function(){
    var win = document.getElementsByClassName('win')[0];
    var winCon = win.getElementsByClassName('win_box')[0];
    var delBtnTop;

    var deleteBtn = document.getElementsByClassName('delete_box');
    for(var i = 0 ; i < deleteBtn.length ; i ++){
        deleteBtn[i].onclick = function(){
            //document.body.style.position = 'absolute';
            win.style.display = 'block';
            //var top = document.body.scrollTop + (window.innerHeight - winCon.offsetHeight)/2;
            var top = (window.innerHeight - winCon.offsetHeight)/2;
             winCon.style.webkitTransition = 'all 0.5s ease 0s';
             winCon.style.transition = 'all 0.5s ease 0s';
             winCon.style.opacity = 1;
             winCon.style.webkitTransform = 'translateY('+top+'px)';
             winCon.style.transform = 'translateY('+top+'px)';

            winCon.className = "win_box bounceInDown";


            /*动画*/
            delBtnTop = this.getElementsByClassName('delete_box_top')[0];
            delBtnTop.style.webkitTransition = 'all 0.5s ease 0s';
            delBtnTop.style.transition = 'all 0.5s ease 0s';
            delBtnTop.style.webkitTransform = 'translateY(-5px) rotate(-45deg)';
            delBtnTop.style.transform = 'translateY(-5px) rotate(-45deg)';
        };
    };

    winCon.getElementsByClassName('cancel')[0].onclick = function(){
        winCon.style.opacity = 0;
        winCon.style.webkitTransform = 'translateY(0px)';
        winCon.style.transform = 'translateY(0px)';
        win.style.display = 'none';
        /*动画*/
        if(deleteBtn){
            delBtnTop.style.webkitTransition = 'all 0.5s ease 0s';
            delBtnTop.style.transition = 'all 0.5s ease 0s';
            delBtnTop.style.webkitTransform = 'translateY(0px) rotate(0deg)';
            delBtnTop.style.transform = 'translateY(0px) rotate(0deg)';
        }
        return false;
    };
    winCon.getElementsByClassName('submit')[0].onclick = function(){
        winCon.style.opacity = 0;
        winCon.style.webkitTransform = 'translateY(0px)';
        winCon.style.transform = 'translateY(0px)';
        win.style.display = 'none';
        /*动画*/
        if(deleteBtn){
            delBtnTop.style.webkitTransition = 'all 0.5s ease 0s';
            delBtnTop.style.transition = 'all 0.5s ease 0s';
            delBtnTop.style.webkitTransform = 'translateY(0px) rotate(0deg)';
            delBtnTop.style.transform = 'translateY(0px) rotate(0deg)';
        }
        return false;
    };

    var checkBtn = document.getElementsByClassName('check_box');
    for(var j = 0 ; j < checkBtn.length; j++){
        checkBtn[j].onclick = function(){
            var hasChecked = this.getAttribute('checked');
            if(hasChecked !== null){
                this.removeAttribute('checked');
            }else{
                this.setAttribute('checked',' ');
            }
        }
    }
};
