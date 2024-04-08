// 시술가능부위
const handleChangePossibleAreaItem = (pointer, t) => {
  const pointerActive = document.querySelector(".pointer.active");
  const pointerImage = document.querySelector(`.${pointer}`);

  if (pointerImage.classList.contains("active")) {
    pointerImage.classList.remove("active");
  } else {
    pointerActive?.classList.remove("active");
    pointerImage.classList.add("active");
  }

  if (t.classList.contains("active")) {
    t.classList.remove("active");
  } else {
    document
      .querySelector(".possible-area-item.active")
      ?.classList.remove("active");
    t.classList.add("active");
  }
};

// 컨설팅 폼 오픈
const handleOpenConsulting = () => {
  const consultingForm = document.querySelector("#consulting-form");
  onToggle(consultingForm);
};

// 메뉴 오픈
const handleOpenMenu = () => {
  const asideMenus = document.querySelector("#aside-menus");
  onToggle(asideMenus);
};

// 푸터 사이트맵 오픈
const handleOpenSitemap = () => {
  const target = document.querySelector(".all-menus-wrapper");
  onToggle(target);
  fullPage.reBuild();
};

// 드롭다운 리스트 메뉴 클릭
const onRegisterItemClick = (e) => {
  e.preventDefault();
  const wrap = document.querySelector("#register-private");
  const value = e.target.innerHTML;
  const input = document.querySelector("#register-private-input");

  input.value = value;

  wrap.classList.remove("show");
};

const onRegisterFormFocus = () => {
  document.querySelector("#register-private").classList.add("show");
};

const onDropdownItemClick = (e, target) => {
  e.preventDefault();

  const value = e.target.innerHTML;
  const t = document.querySelector("#" + target);

  t.innerHTML = value;
};

const body = document.querySelector("body");
body.addEventListener("click", (e) => {
  console.log("body click", e.target.className);
  // 드롭다운 외 영역 클릭 시
  const customDrondown = document.querySelector(".custom-dropdown.show");

  if (e.target.classList.contains("custom-dropdown-input")) {
    return;
  }

  let customDrondownText = Array.from(
    e.currentTarget.querySelectorAll(".custom-dropdown-input")
  ).filter((row) => {
    return e.target === row;
  });

  if (customDrondownText.length > 0) {
    return;
  }
  if (customDrondown) {
    document.querySelectorAll(".custom-dropdown.show").forEach((row) => {
      row.classList.remove("show");
    });
  }
});

// const handkeKeywordEnter = (e, targetList, targetMore) => {
//   if (e.keyCode !== 13) return;
//   const { value } = e.target;
//   const target = document.querySelector("#" + targetList);
//   const more = document.querySelector("#" + targetMore);

//   const button = document.createElement("button");
//   button.setAttribute("class", "keyword");
//   button.addEventListener("click", handkeKeywordRemove);
//   button.innerHTML = value + " x";

//   target.prepend(button);
// };

const handkeKeywordRemove = (e, t) => {
  t.remove();
};

const handleKeywordToggle = (e, t, wrapper) => {
  if (e.target.id !== t.id && e.target.className !== "arrow") return;
  const target = document.querySelector("#" + wrapper);
  target.classList.toggle("show");
};

// 모달 열기
const openModal = (target, e) => {
  if (e) {
    e.preventDefault();
  }
  console.log("target", target);
  document.querySelector(target).classList.add("show");
  document.querySelector(".modal-bg").classList.add("show");
};

// 모달 닫기
const closeModal = () => {
  document.querySelector(`.modal.show`).classList.remove("show");
  document.querySelector(".modal-bg").classList.remove("show");
};

// Handle ESC key (key code 27)
document.addEventListener("keyup", function (e) {
  if (e.key === "Escape" && document.querySelector(".modal.show")) {
    closeModal();
  }
});

function Timer(callback, delay) {
  var timerId,
    start = Date.now(),
    remaining = delay;

  this.clear = function () {
    window.clearTimeout(timerId);
  };

  this.pause = function () {
    this.clear();
    remaining -= Date.now() - start;
    console.log("remaining", remaining);
  };

  this.resume = function () {
    this.clear();
    timerId = window.setTimeout(callback, remaining);
    start = Date.now();
    console.log("remaining", remaining);
  };

  this.start = function () {
    this.clear();
    timerId = window.setTimeout(callback, 3000);
  };
}

// faq
$("#faq-list .item").on("click", function (e) {
  const target = e.currentTarget;
  if (target.classList.contains("active")) {
    target.classList.remove("active");
  } else {
    $("#faq-list .item").removeClass("active");
    target.classList.add("active");
  }
});

$(document).ready(() => {
  $(window).scroll((e) => {
    let scrollTop = $(window).scrollTop();

    if ($("#header").attr("data-none-scroll") === undefined) {
      if (scrollTop > 0) {
        $("#header").addClass("bg");
      } else {
        $("#header").removeClass("bg");
      }
    }
  });
});
