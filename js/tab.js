function initTabs() {
    let tabBtns = document.querySelectorAll(".tab-btn"),
      tabItemsMob = document.querySelectorAll(".tab__item-mob"),
      tabItemsDesk = document.querySelectorAll('.tab__item');

    tabBtns.forEach((item, index) => {
      item.addEventListener("click", () => {
        tabBtns.forEach((el, allTabsIndex) => {
          el.classList.remove("active");
          tabItemsMob[allTabsIndex].classList.remove("active");
          tabItemsDesk[allTabsIndex].classList.remove('active');
        });
        item.classList.add("active");
        tabItemsMob[index].classList.add("active");
        tabItemsDesk[index].classList.add('active');
      });
    });
  }
  initTabs();