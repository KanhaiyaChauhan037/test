async function getData(url) {
    try {


        let res = await fetch(url);
        let data = await res.json();
        return data.meals;
        // console.log(data);
    } catch (err) {
        console.log(err);
    }
}

function append(data, container) {

    // let container = document.getElementById("container");
    data.forEach(({ strMeal, strMealThumb }) => {

        let div = document.createElement("div");
        let p = document.createElement("p");
        p.innerText = strMeal;
        let img = document.createElement("img");
        img.src = strMealThumb;

        div.append(img, p);
        container.append(div);
    })

}

export { getData, append };
