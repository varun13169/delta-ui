let ifr = ["https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=sharp&l=auto&width=680&ds=true&dsyoff=20px&dsblur=47px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253C%21--%2520Avatar%2520Component%2520Starts%2520--%2520Extra%2520Large%2520--%253E%250A%253Cdiv%2520class%253D%2522dui-avatar%2520dui-avatar--xlg%2522%253E%250A%2520%2520%2520%2520%253Cimg%2520class%253D%2522dui-avatar__content%2522%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fi.pravatar.cc%252F300%2522%2520alt%253D%2522Avatar%2522%253E%250A%2520%2520%2520%2520%253C%252Fimg%253E%250A%253C%252Fdiv%253E%250A%253C%21--%2520Avatar%2520Component%2520Ends%2520--%2520Extra%2520Large%2520--%253E",
"https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=sharp&l=auto&width=680&ds=true&dsyoff=20px&dsblur=47px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253C%21--%2520Avatar%2520Component%2520Starts%2520--%2520Large%2520--%253E%250A%253Cdiv%2520class%253D%2522dui-avatar%2520dui-avatar--lg%2522%253E%250A%2520%2520%2520%2520%253Cimg%2520class%253D%2522dui-avatar__content%2522%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fi.pravatar.cc%252F300%2522%2520alt%253D%2522Avatar%2522%253E%250A%2520%2520%2520%2520%253C%252Fimg%253E%250A%253C%252Fdiv%253E%250A%253C%21--%2520Avatar%2520Component%2520Ends%2520--%2520Large%2520%2520--%253E",
"https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=sharp&l=auto&width=680&ds=true&dsyoff=20px&dsblur=47px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253C%21--%2520Avatar%2520Component%2520Starts%2520--%2520Medium%2520--%253E%250A%253Cdiv%2520class%253D%2522dui-avatar%2520dui-avatar--md%2522%253E%250A%2520%2520%2520%2520%253Cimg%2520class%253D%2522dui-avatar__content%2522%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fi.pravatar.cc%252F300%2522%2520alt%253D%2522Avatar%2522%253E%250A%2520%2520%2520%2520%253C%252Fimg%253E%250A%253C%252Fdiv%253E%250A%253C%21--%2520Avatar%2520Component%2520Ends%2520--%2520Medium%2520%2520--%253E"
]


let code = document.querySelector("#containet__code-preview");
code.src = "https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=sharp&l=htmlmixed&width=680&ds=true&dsyoff=71px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=true&fl=1&fm=Hack&fs=14px&lh=126%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522avatar%2520dui-avatar--sm%2522%253E%250A%2520%2520%2520%2520%253Cimg%2520class%253D%2522dui-avatar__content%2522%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fi.pravatar.cc%252F300%2522%2520alt%253D%2522Avatar%2522%253E%250A%2520%2520%2520%2520%253C%252Fimg%253E%250A%253C%252Fdiv%253E"

let componentHolderEles = document.querySelectorAll("#container__component-holder");

componentHolderEles.forEach((ele) => {

    ele.addEventListener('click', (e) => {
        //resetting the border
        componentHolderEles.forEach((ele) => {
            ele.style.removeProperty("border")
        })

        // set the border for the clicked element 
        ele.style.border = `3px solid var(--primary-color-p2-lgt-10pct)`;
        
        // get index of the clicked element
        let eleIdx = Array.prototype.slice.call(componentHolderEles).indexOf(ele);
        code.src = ifr[eleIdx];

        console.log(ele)
    })
})

function setDefault() {
    let eleIdx = 0;
    componentHolderEles.item(eleIdx).style.backgroundColor = `var(--primary-color-p2-lgt-10pct)`;
    code.src = ifr[eleIdx];
}

// setDefault();



