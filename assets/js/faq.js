const faq = document.querySelector("#faq-list");
let faqHtml = "";
FAQ_LIST.forEach((item, index) => {
  faqHtml += `
        <div class="item">
          <div class="question">
            <img src="../assets/images/info/info-qna-q${
              index + 1
            }@3x.png" alt="q${index + 1}">
            ${item.q}
            </span>
            </a>
          </div>
          <div class="answer">
            ${item.a}
          </div>
        </div>`;
});
faq.innerHTML = faqHtml;
