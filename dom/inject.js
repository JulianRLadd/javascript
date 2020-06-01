/*Exercise instructions : take the html code from the following 
codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and
use JavaScript DOM manipulation to inject the html into the
inject id element of inject.html
*/


//Creating variables for each element
const header1 = document.createElement('div')
const headerTitle = document.createElement('h1')
const headerText = document.createElement('span')

//Labeling and Styling Span for Header Title
headerText.textContent = "HTML Practice Exercise TEKcamp"
headerText.style.fontStyle = "italic"
header1.style.textAlign = "center"

//Appending Span to h1 header element
headerTitle.appendChild(headerText);

//Creating 2nd Title h2 element
const headerSubTitle = document.createElement('h2')

//Creating link element
const headerLink = document.createElement('a')

//Creating Node for a element
const link = document.createTextNode("TEKsystems \"TEKcamp\" ");

//Appending text node to link element
headerLink.appendChild(link);

//labeling title for link element
headerLink.title = "This is The Link";
headerLink.href = "https://www.teksystems.com/";

//Appending link element to h2 element
headerSubTitle.appendChild(headerLink)

//Appending h1 and h2 element to header div inside of inject div
header1.appendChild(headerTitle)
header1.appendChild(headerSubTitle)

//Creating border and appending it to bottom of header div
const border1 = document.createElement('hr')
header1.appendChild(border1);

//Creating variable for inject div
const project = document.querySelector("#inject")

//Appending header div into inject div
project.appendChild(header1)

//Creating multiple text-like elements to concatenate the proper string
const loveHtml = document.createElement('p')
loveHtml.textContent = "I love "
project.appendChild(loveHtml)

const span = document.createElement('span')
span.style.fontStyle = "italic"

const htmlTag = document.createTextNode("HTML")
span.appendChild(htmlTag)

loveHtml.appendChild(span)

const afterTag = document.createTextNode(" for the following reasons:")
loveHtml.appendChild(afterTag)

//Creating list elements
const orderList = document.createElement('ol')
const listItem1 = document.createElement('li')
listItem1.textContent = "I learned it quickly"
orderList.appendChild(listItem1)
const listItem2 = document.createElement('li')
listItem2.textContent = "I can make web pages using code"
orderList.appendChild(listItem2)
const listItem3 = document.createElement('li')
listItem3.textContent = "It's fun."
orderList.appendChild(listItem3)

project.appendChild(orderList)

const border2 = document.createElement('hr')
project.appendChild(border2);

//Creating last paragraph

const teacherLine = document.createElement('p')
teacherLine.textContent = "My instructor’s email address is: "
project.appendChild(teacherLine)


const email = document.createElement('a')

const emailLink  = document.createTextNode("ayunas@teksystems.com")
email.appendChild(emailLink);
email.href = "mailto:ayunas@teksystems.com"
project.appendChild(email)

//Last header
const salutations = document.createElement('h1')
salutations.textContent = "Have a great day!"
project.appendChild(salutations)

//Last text element
const lastText = document.createElement('p')
lastText.textContent = "I really look forward to learning how to code!  Have a great day. -[Team \"Git'er Done\"]"
project.appendChild(lastText)

