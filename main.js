/* triggered by a click on a dropdown component */
const onDropdownClick = (e) => e.classList.contains("dropped") ? e.classList.remove("dropped") : e.classList.add("dropped")

/* handler of header dropdown */
const handleHeaderDropdown = (e) => {
  onDropdownClick(e.firstElementChild)

  e.classList.contains("dropped") ? e.classList.remove("dropped") : e.classList.add("dropped")

  const headerHome = document.getElementById("HeaderHome");
  headerHome.classList.contains("dropped") ? headerHome.classList.remove("dropped") : headerHome.classList.add("dropped")

  const headerPortfolio = document.getElementById("HeaderPortfolio");
  headerPortfolio.classList.contains("dropped") ? headerPortfolio.classList.remove("dropped") : headerPortfolio.classList.add("dropped")
}

/* handler of footer dropdown */
const handleFooterDropdown = (e) => {
  onDropdownClick(e.firstElementChild)

  e.classList.contains("dropped") ? e.classList.remove("dropped") : e.classList.add("dropped")

  const footerLinkedIn = document.getElementById("FooterLinkedIn");
  footerLinkedIn.classList.contains("dropped") ? footerLinkedIn.classList.remove("dropped") : footerLinkedIn.classList.add("dropped")

  const footerTwitter = document.getElementById("FooterTwitter");
  footerTwitter.classList.contains("dropped") ? footerTwitter.classList.remove("dropped") : footerTwitter.classList.add("dropped")

  const footerGithub = document.getElementById("FooterGithub");
  footerGithub.classList.contains("dropped") ? footerGithub.classList.remove("dropped") : footerGithub.classList.add("dropped")
}


var sliderElement
var sliderSlides
var currentSliderScrollPos = 0
var slideWidth = 0
var slideMaxWidth = 0
/**
 * Scroll to prev slide within the slider
 */
const onClickSliderPrev = (e) => {
  var tempElement = document.getElementById(e)
  if (sliderElement != tempElement) {
    sliderElement = tempElement
    sliderSlides = sliderElement.querySelectorAll('.inner-scroll').length
    currentSliderScrollPos = sliderElement.getAttribute("scroll-slide")
    slideWidth = sliderElement.firstElementChild.offsetWidth
    slideMaxWidth = sliderSlides * slideWidth
  }
  
  
  // Calculate the new scroll position for the slider
  var newSliderScrollPos = Number(currentSliderScrollPos) - slideWidth

  // If the new calculated scroll position exceedes the sliders maximum range ...
  if (newSliderScrollPos < 0) {

    // ... do nothing
    return;
    
  }

  // Update the current slider scroll position
  currentSliderScrollPos = newSliderScrollPos
  sliderElement.setAttribute("scroll-slide", newSliderScrollPos.toString())

  // Scroll to the previous slide
  sliderElement.scrollTo(newSliderScrollPos, 0)

}

/**
 * Scroll to next slide within the slider
 */
const onClickSliderNext = (e) => {
  var tempElement = document.getElementById(e)
  if (sliderElement != tempElement) {
    sliderElement = tempElement
    sliderSlides = sliderElement.querySelectorAll('.inner-scroll').length
    currentSliderScrollPos = sliderElement.getAttribute("scroll-slide")
    slideWidth = sliderElement.firstElementChild.offsetWidth
    slideMaxWidth = sliderSlides * slideWidth
  }

	// Calculate the new scroll position for the slider
  var newSliderScrollPos = Number(currentSliderScrollPos) + slideWidth
  
  // If the new calculated scroll position exceedes the sliders maximum range ...
  if (newSliderScrollPos >= slideMaxWidth) {
  
  	// ... do nothing
  	return;
    
  }
  
  // Update the current slider scroll position
  currentSliderScrollPos = newSliderScrollPos;
  sliderElement.setAttribute("scroll-slide", newSliderScrollPos.toString())

  // Scroll to the next slide
	sliderElement.scrollTo(newSliderScrollPos, 0)
  
}


var bip = {
  "patterns": {
    "path": "img/background/",
    "images": [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
      "8.png",
      "9.png",
      "10.png",
      "11.png",
      "12.png",
      "13.png",
      "14.png",
      "15.png",
      "16.png",
      "17.png",
      "18.png",
      "19.png",
      "20.png",
      "21.png",
      "22.png",
      "23.png",
      "24.png",
      "25.png",
      "26.png",
      "27.png",
      "28.png",
      "29.png",
      "30.png",
      "31.png",
      "32.png",
      "33.png",
      "34.png",
      "35.png",
      "36.png",
      "37.png",
      "38.png",
      "39.png",
      "40.png",
      "41.png",
      "42.png",
      "43.png",
      "44.png",
      "45.png",
      "46.png",
      "47.png",
      "48.png",
      "49.png",
      "50.png",
      "51.png",
      "52.png",
      "53.png",
      "54.png",
      "55.png",
      "56.png",
      "57.png",
      "58.png",
      "59.png",
      "60.png",
      "61.png",
      "62.png",
      "63.png",
      "64.png",
      "65.png",
      "66.png",
      "67.png",
      "68.png",
      "69.png",
      "70.png",
      "71.png",
      "72.png",
      "73.png",
      "74.png",
      "75.png",
      "76.png",
      "77.png",
      "78.png",
      "79.png",
      "80.png",
      "81.png",
      "82.png",
      "83.png",
      "84.png",
      "85.png",
      "86.png",
      "87.png",
      "88.png",
      "89.png",
      "90.png",
      "91.png",
      "92.png",
      "93.png",
      "94.png",
      "95.png",
      "96.png",
      "97.png",
      "98.png",
      "99.png",
      "100.png",
      "101.png",
      "102.png",
      "103.png",
      "104.png",
      "105.png",
      "106.png",
      "107.png",
      "108.png",
      "109.png",
      "110.png",
      "111.png",
      "112.png",
      "113.png",
      "114.png",
      "115.png",
      "116.png",
      "117.png",
      "118.png",
      "119.png",
      "120.png",
      "121.png",
      "122.png",
      "123.png",
      "124.png",
      "125.png",
      "126.png",
      "127.png",
      "128.png",
      "129.png",
      "130.png",
      "131.png",
      "132.png",
      "133.png",
      "134.png",
      "135.png",
      "136.png",
      "137.png",
      "138.png",
      "139.png",
      "140.png",
      "141.png",
      "142.png",
      "143.png",
      "144.png",
      "145.png",
      "146.png",
      "147.png",
      "148.png",
      "149.png",
      "150.png",
      "151.png",
      "152.png",
      "153.png",
      "154.png",
      "155.png",
      "156.png",
      "157.png",
      "158.png",
      "159.png",
      "160.png",
      "161.png",
      "162.png",
      "163.png",
      "164.png",
      "165.png",
      "166.png",
      "167.png",
      "168.png",
      "169.png",
      "170.png",
      "171.png",
      "172.png",
      "173.png",
      "174.png",
      "175.png",
      "176.png",
      "177.png",
      "178.png",
      "179.png",
      "180.png",
      "181.png",
      "182.png",
      "183.png",
      "184.png",
      "185.png",
      "186.png",
      "187.png",
      "188.png",
      "189.png",
      "190.png",
      "191.png",
      "192.png",
      "193.png",
      "194.png",
      "195.png",
      "196.png",
      "197.png",
      "198.png",
      "199.png",
      "200.png",
      "201.png",
      "202.png",
      "203.png",
      "204.png",
      "205.png",
      "206.png",
      "207.png",
      "208.png",
      "209.png",
      "210.png",
      "211.png",
      "212.png",
      "213.png",
      "214.png",
      "215.png",
      "216.png",
      "217.png",
      "218.png",
      "219.png",
      "220.png",
      "221.png",
      "222.png",
      "223.png",
      "224.png",
      "225.png",
      "226.png",
      "227.png",
      "228.png",
      "229.png",
      "230.png",
      "231.png",
      "232.png",
      "233.png",
      "234.png",
      "235.png",
      "236.png",
      "237.png",
      "238.png",
      "239.png",
      "240.png",
      "241.png",
      "242.png",
      "243.png",
      "244.png",
      "245.png",
      "246.png",
      "247.png",
      "248.png",
      "249.png",
      "250.png"
    ]
  }
}

var bip_isOn = false;
var bip_tree = '';

const switchBackground = () => {
  const images = bip.patterns.images;
  var index = Math.floor(Math.random() * images.length);
  document.body.style.backgroundImage = `url('${bip_tree}${bip.patterns.path}${bip.patterns.images[index]}')`;
}

const switchBackgroundStart = (tree) => {
  if(bip_isOn === false){
    bip_isOn = true;
    bip_tree = tree

    // init a background
    switchBackground(tree);

    // init counter
    counterStart(0, 10 * 60 * 1000, switchBackground); // Give callback to switch backgrounds
  }
}

// Stop the background switcher
const switchBackgroundStop = () => {
  if(isOn === true) {
    isOn = false;
    counterStop();
  }
}

var counter_duration = 0;
var counter_ms = 0;
var counter_time = 0;
var counter_isOn = false;
var counter_isReset = false;
var counter_timerID = 0;

// Core of the counter, add 1 to time
// Call existing callback if duration is equal or inferior to 0
const counterChrono = (callback = null) => {
  counter_time += 1;
  if(counter_duration > 0) {
    if(counter_duration <= counter_time) counterStop(null);
  } else {
    if(callback) callback();
  }
}

// Start the counter
const counterStart = (duration = 1, ms = 1000, callback = null) => {
  counter_duration = duration
  counter_ms = ms
  if(counter_isOn === false){
    counter_timerID = setInterval(() => {counterChrono(callback)}, counter_ms);
    counter_isOn = true;
    counter_isReset = false;
  }
}

// Stop the counter
// Call existing callback on stop
const counterStop = (callback = null) => {
  if(counter_isOn === true){
    counter_isOn = false;
    clearTimeout(counter_timerID);
    if(callback) callback();
  }
}

// Reset the counter
// Call existing callback on reset
const counterReset = (callback = null) => {
  if(counter_isReset === false) {
    clearInterval(counter_timerID);
    counter_time = 0;
    counter_isReset = true;
    if(callback) callback();
  }
}