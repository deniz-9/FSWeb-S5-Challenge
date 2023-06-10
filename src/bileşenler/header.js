const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //

  const headerDivEl = document.createElement("div");
  headerDivEl.classList.add("header");

  const span = document.createElement("span");
  span.classList.add("date");
  span.textContent = tarih;
  headerDivEl.appendChild(span);

  const h1Baslik = document.createElement("h1");
  h1Baslik.textContent = baslik;
  headerDivEl.appendChild(h1Baslik);

  const span2 = document.createElement("span");
  span2.classList.add("temp");
  span2.textContent = yazi;
  headerDivEl.appendChild(span2);

  return headerDivEl;

  

}






function headerEkleyici(secici) {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

  const seciciDom = document.querySelector(secici);
  seciciDom.appendChild(
    Header("Teknoloji Zamanı ", "10 Haziran 2023", "Güncel Teknoloji Haberleri")
  );
};



export { Header, headerEkleyici }
