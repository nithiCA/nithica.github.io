// JavaScript (jQuery)

const hamper_options = `
<div class="container hamper-options mt-5">
<div class="row">
  <div class="col-md-3 col-lg-3">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="accessories" value="accessories">
    <label class="form-check-label" for="accessories">Accessories</label>
  </div>
  </div>
  <div class="col-md-3 col-lg-3">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="chocolates" value="chocolates">
    <label class="form-check-label" for="chocolates">Chocolates</label>
  </div>
  </div>
  <div class="col-md-3 col-lg-3">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="perfume" value="perfume">
    <label class="form-check-label" for="perfume">Perfume</label>
  </div>
  </div>
  <div class="col-md-3 col-lg-3">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="dry_fruits_nuts" value="dry_fruits_nuts">
      <label class="form-check-label" for="dry_fruits_nuts">Dry Fruits and Nuts</label>
    </div>
  </div>
</div>

<div class="row">
  <!-- Add more options here -->
  <div class="col-md-3 col-lg-3">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="scented_candle" value="scented_candle">
      <label class="form-check-label" for="scented_candle">Scented Candle</label>
    </div>
  </div>
  <div class="col-md-3 col-lg-3">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="stationery" value="stationery">
      <label class="form-check-label" for="stationery">Stationery</label>
    </div>
  </div>
  <div class="col-md-3 col-lg-3">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="plushies" value="plushies">
      <label class="form-check-label" for="plushies">Plushies</label>
    </div>
  </div>
</div>

<div class="row">
  <!-- Add more options here -->
  <div class="col-md-3 col-lg-3">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="poloraids" value="poloraids">
      <label class="form-check-label" for="poloraids">Poloraids</label>
    </div>
  </div>
  <div class="col-md-3 col-lg-3">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="wine" value="wine">
      <label class="form-check-label" for="wine">Wine</label>
    </div>
  </div>
  <div class="col-md-3 col-lg-3">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="indoor_plants" value="indoor_plants">
      <label class="form-check-label" for="indoor_plants">Indoor Plants</label>
    </div>
  </div>
  <div class="col-md-3 col-lg-3">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="books" value="books">
      <label class="form-check-label" for="books">Books</label>
    </div>
  </div>
</div>

<div class="row">
  <!-- Add more options here -->
  <div class="col-md-3 col-lg-3">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="led_lights" value="led_lights">
      <label class="form-check-label" for="led_lights">LED Lights</label>
    </div>
  </div>
  <div class="col-md-3 col-lg-3">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="kerchiefs" value="kerchiefs">
      <label class="form-check-label" for="kerchiefs">Kerchiefs</label>
    </div>
  </div>
  <div class="col-md-3 col-lg-3">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="cup_cakes" value="cup_cakes">
      <label class="form-check-label" for="cup_cakes">Cup Cakes</label>
    </div>
  </div>
  <div class="col-md-3 col-lg-3">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="crochets" value="crochets">
      <label class="form-check-label" for="crochets">Crochets</label>
    </div>
  </div>
</div>

<div class="row">
  <!-- Add more options here -->
  <div class="col-md-3 col-lg-3">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gift_vouchers" value="gift_vouchers">
      <label class="form-check-label" for="gift_vouchers">Gift Vouchers</label>
    </div>
  </div>
  <div class="col-md-3 col-lg-3">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="decorative_items" value="decorative_items">
      <label class="form-check-label" for="decorative_items">Decorative Items</label>
    </div>
  </div>
  <div class="col-md-3 col-lg-3">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="craft_items" value="craft_items">
      <label class="form-check-label" for="craft_items">Craft Items</label>
    </div>
  </div>
  <div class="col-md-3 col-lg-3">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="incense_sticks" value="incense_sticks">
      <label class="form-check-label" for="incense_sticks">Incense Sticks</label>
    </div>
  </div>
</div>


</div>
`;

function get_html(num) {
    return `
    <div class="card">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="assets/images/gh_${num}.jpg" class="card-img" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <div class="form-group">
                        <select class="form-control" id="dimensionDropdown1">
                            <option value="">Choose your size!</option>
                            <option value="tiny">Tiny</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </div>
                
                    <!-- Dropdown for selecting quality -->
                    <div class="form-group">
                        <select class="form-control" id="qualityDropdown1">
                            <option value="">Choose your quality!</option>
                            <option value="basic">Basic</option>
                            <option value="premium">Premium</option>
                        </select>
                    </div>
                </div>

                ${hamper_options}

                <div class="price-and-cart">
                    <div class="card-text price" id="price1">
                    </div>
                    <a href="construction.html"><button type="button" class="btn btn-dark btn-add-to-cart"><i class="fas fa-shopping-cart"></i> Add to Cart</button></a>
                </div>
            </div>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="assets/images/gh_${num+10}.jpg" class="card-img" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <div class="form-group">
                        <select class="form-control" id="dimensionDropdown2">
                            <option value="">Choose your size!</option>
                            <option value="tiny">Tiny</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </div>
                
                    <!-- Dropdown for selecting quality -->
                    <div class="form-group">
                        <select class="form-control" id="qualityDropdown2">
                            <option value="">Choose your quality!</option>
                            <option value="basic">Basic</option>
                            <option value="premium">Premium</option>
                        </select>
                    </div>
                </div>
                ${hamper_options}
                <div class="price-and-cart">
                    <div class="card-text price" id="price2"></div>
                    <a href="construction.html"><button type="button" class="btn btn-dark btn-add-to-cart"><i class="fas fa-shopping-cart"></i> Add to Cart</button></a>
                </div>
            </div>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="assets/images/gh_${num+20}.jpg" class="card-img" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <div class="form-group">
                        <select class="form-control" id="dimensionDropdown3">
                            <option value="">Choose your size!</option>
                            <option value="tiny">Tiny</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </div>
                
                    <!-- Dropdown for selecting quality -->
                    <div class="form-group">
                        <select class="form-control" id="qualityDropdown3">
                            <option value="">Choose your quality!</option>
                            <option value="basic">Basic</option>
                            <option value="premium">Premium</option>
                        </select>
                    </div>
                </div>
                ${hamper_options}
                <div class="price-and-cart">
                    <div class="card-text price" id="price3"></div>
                    <a href="construction.html"><button type="button" class="btn btn-dark btn-add-to-cart"><i class="fas fa-shopping-cart"></i> Add to Cart</button></a>
                </div>
            </div>
        </div>
    </div>
    <br>
    `;
}
const cardTitles = ["Chocolate Hampers", "Relaxation Hampers", "Bracelet Hampers", "Cupcake Hampers", "Ultimate Hampers", "Crafty Hampers", "Premium Hampers", "Cozy Hampers", "Decorative Hampers", "Personalized Hampers"];
const cardTexts = ["For your chocolaty needs!", "For your relaxation needs!", "For your bracelet needs!", "For your cupcake needs!", "For your ultimate needs!", "For your crafty needs!", "For your premium needs!", "For your cozy needs!", "For your decorative needs!", "For your personalized needs!"];

function get_dummy_product(num) {
    return `
    <div class="card col-md-3">
        <img src="assets/images/gh_${num}.jpg" class="card-img-top" alt="Founder 1">
        <div class="card-body">
            <h5 class="card-title">${cardTitles[num]}</h5>
            <p class="card-text">${cardTexts[num]}</p>
        </div>
    </div>
    `;
}

$(document).ready(function() {
    const defaultHTML = `
    <div class="row">
        ${get_dummy_product(0)}
        <div class="col-md-1"></div>
        ${get_dummy_product(1)}
        <div class="col-md-1"></div>
        ${get_dummy_product(2)}
    </div>
    <br>
    <div class="row">
        ${get_dummy_product(3)}
        <div class="col-md-1"></div>
        ${get_dummy_product(4)}
        <div class="col-md-1"></div>
        ${get_dummy_product(5)}
    </div>
    `;

    // Sample data for hamper images
    const path = "assets/images/gh_";
    const hamperImages = [
        { type: "chocolate", num: 0},
        { type: "relax", num: 1},
        { type: "Bracelet", num: 2},
        { type: "Cupcake", num: 3},
        { type: "Ultimate", num: 4},
        { type: "Crafty", num: 5},
        { type: "Premium", num: 6},
        { type: "Cozy", num: 7},
        { type: "Decorative", num: 8},
        { type: "Personalized", num: 9}
        // Add more hamper images as needed
    ];
    const prices = {
        "tiny": { basic: 399, premium: 599 },
        "small": { basic: 699, premium: 899 },
        "medium": { basic: 999, premium: 1299 },
        "large": { basic: 1499, premium: 1799 }
    };

    function calculatePrice(id) {
        const dimension = $(`#dimensionDropdown${id}`).val();
        const quality = $(`#qualityDropdown${id}`).val();
        console.log(dimension, quality);

        if (dimension === '' || quality === '') {
            console.log(0);
            return 0;
        }

        const price = prices[dimension][quality];
        console.log(price);

        document.getElementById(`price${id}`).innerHTML = `
            <span class="price-label"><i class="fas fa-rupee-sign"></i> </span>
            <span class="price-value">${price}</span>
        `;

        return price;
    }

    
    // Function to filter and display hamper images based on selection
    function displayHamperImages(selection) {
        const filteredImages = hamperImages.filter(image => image.type === selection);
        const hamperImagesContainer = document.getElementById("hamperImages");
        hamperImagesContainer.innerHTML = ""; // Clear previous images
        if (filteredImages.length === 0) {
            hamperImagesContainer.innerHTML = defaultHTML;
            return;
        }

        let num = filteredImages[0].num;
        console.log(num);

        hamperImagesContainer.innerHTML = get_html(num);
    }

    // Event listener for dropdown change
    $("#hamperTypeSelect").on("change", function() {
        const selection = $(this).val();
        displayHamperImages(selection);
        calculatePrice();
    });

    $(document).on("change", "#dimensionDropdown1, #qualityDropdown1", function() {
        calculatePrice(1);
    });
    $(document).on("change", "#dimensionDropdown2, #qualityDropdown2", function() {
        calculatePrice(2);
    });
    $(document).on("change", "#dimensionDropdown3, #qualityDropdown3", function() {
        calculatePrice(3);
    });

    // Initial display of all hamper images
    displayHamperImages("");
});

