document.getElementById("acceptBtn").addEventListener("click", function(event){
  event.preventDefault();
  alert("Growth Insights added");
});

document.getElementById("declineBtn").addEventListener("click", function(event){
  event.preventDefault();
  alert("Continuing without this material");
});

function openModal(type){
  let text = "";

  if(type === "terms"){
    text = `<h2>Terms of Use</h2>
<p>By accessing and using this website, you agree to comply with these Terms of Use. The content provided on this website is for educational and informational purposes only.</p>

<h3>Use of Content</h3>
<p>You may read and use the information for personal purposes. You may not copy, resell, distribute, or misuse the content without permission.</p>

<h3>No Professional Guarantee</h3>
<p>Plant care results may vary depending on climate, environment, orchid type, potting medium, and individual care routine.</p>

<h3>Website Availability</h3>
<p>We may update, change, or remove website content at any time without prior notice.</p>`;
  }

  if(type === "privacy"){
    text = `<h2>Privacy Policy</h2>
<p>Your privacy matters. This website is designed to provide information about orchid care and may collect basic technical data to improve user experience.</p>

<h3>Information We May Collect</h3>
<p>We may collect non-sensitive information such as browser type, device information, pages visited, and general website interaction data.</p>

<h3>How Information Is Used</h3>
<p>Information may be used to improve the website, understand visitor behavior, and optimize content quality.</p>

<h3>Third-Party Tools</h3>
<p>If analytics, advertising pixels, or external tools are added in the future, they may process data according to their own policies.</p>

<h3>Contact</h3>
<p>For privacy-related questions, please contact the website administrator.</p>`;
  }

  if(type === "refund"){
    text = `<h2>Refund Policy</h2>
<p>This refund policy applies only if this website is connected to a paid product, digital guide, course, or service.</p>

<h3>Refund Window</h3>
<p>Refund requests may be accepted within 60 days of purchase, unless a different refund period is clearly stated at checkout.</p>

<h3>Eligibility</h3>
<p>To request a refund, customers may need to provide proof of purchase and a brief explanation of the issue.</p>

<h3>Processing</h3>
<p>Approved refunds are usually processed through the original payment method. Processing time may vary depending on the payment provider.</p>

<h3>Exceptions</h3>
<p>Refunds may not apply to completed services, promotional offers, or cases where terms were violated.</p>`;
  }

  document.getElementById("modalText").innerHTML = text;
  document.getElementById("modal").style.display = "flex";
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}

document.getElementById("modal").addEventListener("click", function(event){
  if(event.target.id === "modal"){
    closeModal();
  }
});

document.addEventListener("keydown", function(event){
  if(event.key === "Escape"){
    closeModal();
  }
});
