let container = document.querySelector('.container')

let count = 1, string = "Masai Student";

const Data = () => {
   
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const arr = Array(25).fill(1);
            resolve(arr);
        },300)
    })
}

const appendData = (arr) => {
  arr.forEach(() => {
    let div = `<div><p> ${string} : ${count++}</p></div>`;

    container.insertAdjacentHTML("beforeend", div);
  });
};

const getData = async () => {
        const data = await Data()

        appendData(data)
}

getData()

window.addEventListener("scroll" , ()=>{
    const { clientHeight, scrollHeight, scrollTop } =
      document.documentElement;


    if (clientHeight + scrollTop >= scrollHeight ) getData();
})


