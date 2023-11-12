var btn = document.querySelector('.start_btn');
var dialog = document.getElementById('choose_guess');
btn.addEventListener('click', () => {
    // const dialog = document.getElementById('choose_guess');
    dialog.showModal();
})

var sub = document.querySelector('.sub');
var titleNum = 1; //标题当前回合
var cpWin = 0;  //赢数
var myWin = 0;  //输数
sub.addEventListener('click', function () {
    dialog.close();
    const titleSum = 3;
    //标题改变    
    let titleText = document.querySelector('.title_text');
    titleText.innerHTML = `第${titleNum}回合（共${titleSum}回合)`;
    titleText.style.visibility = 'visible';
    console.log('走到这');
    console.log(`第${titleNum}回合`);

    //获取下拉框选中值
    const guess = document.getElementById('guess');
    const guessValue = guess.value;
    console.log(guessValue);

    //获取下拉选项index值
    const dataOptions = guess.querySelectorAll('option');
    let guessIndex = 0;
    for (let i = 0; i < dataOptions.length; i++) {
        if (dataOptions[i].innerHTML == guessValue) {
            guessIndex = dataOptions[i].index;
        }
    }
    //随机生产0-2的值
    let a = Math.round(Math.random() * 2);
    // //判断随机值与index值是否相等，相等则随机值重新获取。
    // while (a == guessIndex) {
    //     a = Math.round(Math.random() * 2);
    // }

    //输赢事件
    let cpScore = document.querySelector('.computer').querySelector('.score');
    let myScore = document.querySelector('.my').querySelector('.score');
    const cpName = document.querySelector('.computer').querySelector('.name').innerHTML;
    const myName = document.querySelector('.my').querySelector('.name').innerHTML;
    let resultP = document.querySelector('.result').querySelector('p');
    // let repStart = resultP.innerHTML.slice(0, 3);
    // let repEnd = resultP.innerHTML.slice(-1);
    if ((a == 0 && guessIndex == 1) || (a == 1 && guessIndex == 2) || (a == 2 && guessIndex == 0)) {
        //电脑赢
        cpWin += 1;
        changeImg(a, guessIndex);
        // let cpStart = cpScore.innerHTML.slice(0, 2);
        // let cpEnd = cpScore.innerHTML.slice(3);
        // let myStart = myScore.innerHTML.slice(0, -1);
        // let myspEnd = cpScore.innerHTML.split(-1);
        cpScore.innerHTML = `胜：${cpWin} | 负：${myWin}`;
        myScore.innerHTML = `胜：${myWin} | 负：${cpWin}`;
        resultP.style.display = 'block'
        resultP.innerHTML = `本回合${cpName}赢`;
    } else if ((guessIndex == 0 && a == 1) || (guessIndex == 1 && a == 2) || (guessIndex == 2 && a == 0)) {
        //玩家赢
        myWin += 1;
        changeImg(a, guessIndex);
        // let myStart = myScore.innerHTML.slice(0, 2);
        // let myEnd = myScore.innerHTML.slice(3);
        // let cpStart = cpScore.innerHTML.slice(0, -1);
        // console.log(`mystart=${myStart},myend=${myEnd},cpstart=${cpStart}`);
        // let myspEnd = cpScore.innerHTML.slice(-1);
        myScore.innerHTML = `胜：${myWin} | 负：${cpWin}`;
        cpScore.innerHTML = `胜：${cpWin} | 负：${myWin}`;
        resultP.style.display = 'block'
        resultP.innerHTML = `本回合${myName}赢`;
    } else if (guessIndex == a) {
        //平局
        resultP.style.display = 'block';
        resultP.innerHTML = '本回合平';
    }
    let htEnd = document.querySelector('.result').querySelector('h3');
    if (titleNum == 3) {
        if (cpWin > myWin) {
            htEnd.style.display = 'block';
            htEnd.innerHTML = `(≧v≦)o~~好棒，恭喜${cpName}获得胜利！`;
            btn.style.display = 'none';
        } else if (cpWin < myWin) {
            htEnd.style.display = 'block';
            htEnd.innerHTML = `(≧v≦)o~~好棒，恭喜${myName}获得胜利！`;
            btn.style.display = 'none';
        } else if (cpWin == myWin) {
            htEnd.style.display = 'block';
            htEnd.innerHTML = `本场游戏平局`;
            btn.style.display = 'none';
        }
    } else if (cpWin == 2) {
        htEnd.style.display = 'block';
        htEnd.innerHTML = `(≧v≦)o~~好棒，恭喜${cpName}获得胜利！`;
        btn.style.display = 'none';
    } else if (myWin == 2) {
        htEnd.style.display = 'block';
        htEnd.innerHTML = `(≧v≦)o~~好棒，恭喜${cpName}获得胜利！`;
        btn.style.display = 'none';
    }
    titleNum += 1;
})

function changeImg(a, b) {
    const cpOriginal = document.querySelector('.computer').querySelector('.original');
    const myOriginal = document.querySelector('.my').querySelector('.original');
    const cpImg = document.querySelector('.cp_img');
    const myImg = document.querySelector('.my_img');
    if (a == 0) {
        cpOriginal.style.display = 'none';
        cpImg.style.display = 'block';
        cpImg.src = "images/rock.png";
    } else if (a == 1) {
        cpOriginal.style.display = 'none';
        cpImg.style.display = 'block';
        cpImg.src = "images/scissor.png";
    } else if (a == 2) {
        cpOriginal.style.display = 'none';
        cpImg.style.display = 'block';
        cpImg.src = "images/paper.png";
    }
    if (b == 0) {
        myOriginal.style.display = 'none';
        myImg.style.display = 'block';
        myImg.src = "images/rock.png";
    } else if (b == 1) {
        myOriginal.style.display = 'none';
        myImg.style.display = 'block';
        myImg.src = "images/scissor.png";
    } else if (b == 2) {
        myOriginal.style.display = 'none';
        myImg.style.display = 'block';
        myImg.src = "images/paper.png";
    }
}
