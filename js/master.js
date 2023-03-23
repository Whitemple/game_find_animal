window.onload = function () {
  // Инициализация DOM-элементов

  let x = 0;
  let y = 0;
  const animalList = document.querySelectorAll(".item");
  let searchItems = document.querySelectorAll(".item").length;
  const box1Clip = document.getElementById("box1_clip");
  const box1Filter = document.getElementById("box1_filter");
  const dove = document.getElementById("item1");
  const swallow = document.getElementById("item2");
  const fish = document.getElementById("item3");
  const fish1 = document.getElementById("item4");
  const fox = document.getElementById("item5");
  const deer = document.getElementById("item6");
  const maxItems = document.getElementById("maxItems");
  const curItems = document.getElementById("curItems");
  const restart = document.getElementById("restart");

  maxItems.innerHTML = searchItems;
  curItems.innerHTML = searchItems;

  // Логика ведение курсора
  window.onmousemove = (event) => {
    x = event.pageX;
    y = event.pageY;
    box1Clip.style.clipPath = `circle(50px at ${x}px ${y}px)`;
  };

  // Запускаем цикл при наведении на элемент и клик
  animalList.forEach((event) => {
    event.addEventListener("click", (target) => {
      let itemRemove = target.target.id;
      itemRemove = document.getElementById(itemRemove);
      box1Clip.removeChild(itemRemove);
      box1Filter.appendChild(itemRemove);

      setTimeout(() => {
        itemRemove.style.top = "670px";
        if (itemRemove === dove) {
          itemRemove.style.left = "50px";
        } else if (itemRemove === swallow) {
          itemRemove.style.left = "160px";
        } else if (itemRemove === fish) {
          itemRemove.style.left = "280px";
        } else if (itemRemove === fish1) {
          itemRemove.style.left = "420px";
        } else if (itemRemove === fox) {
          itemRemove.style.left = "720px";
        } else if (itemRemove === deer) {
          itemRemove.style.left = "570px";
        }
      });
      searchItems -= 1;
      curItems.innerHTML = searchItems;
      if (searchItems === 0) {
        alert("Вы нашли всех животных");
      }
    });
  });

  // Функции изменения рандомно координат

  const randomTopBird = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const randomTopFish = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const randomTopAnimal = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // Функция сброса и начинания заново игры

  const restartAllItems = function () {
    dove.style.top = `${randomTopBird(50, 300)}px`;
    dove.style.left = `${Math.ceil(Math.random() * 750)}px`;
    box1Clip.appendChild(dove);

    swallow.style.top = `${randomTopBird(50, 250)}px`;
    swallow.style.left = `${Math.ceil(Math.random() * 700)}px`;
    box1Clip.appendChild(swallow);

    fish.style.top = `${randomTopFish(360, 400)}px`;
    fish.style.left = `${Math.ceil(Math.random() * 750)}px`;
    box1Clip.appendChild(fish);

    fish1.style.top = `${randomTopFish(360, 400)}px`;
    fish1.style.left = `${Math.ceil(Math.random() * 750)}px`;
    box1Clip.appendChild(fish1);

    fox.style.top = `${randomTopAnimal(520, 550)}px`;
    fox.style.left = `${Math.ceil(Math.random() * 750)}px`;
    box1Clip.appendChild(fox);

    deer.style.top = `${randomTopAnimal(510, 545)}px`;
    deer.style.left = `${Math.ceil(Math.random() * 750)}px`;
    box1Clip.appendChild(deer);
  };

  // Клик по кнопке restart

  restart.addEventListener("click", () => {
    searchItems = document.querySelectorAll(".item").length;
    maxItems.innerHTML = searchItems;
    curItems.innerHTML = searchItems;
    restartAllItems();
  });
};
