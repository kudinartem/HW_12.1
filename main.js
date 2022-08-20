const quest = '🤔'
const wow = '😲'
const text = "<p>Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions. Aaah....This is a consular ship. The tracks go off in this direction. Look, sir -- droids. Wake up! Wake up! We're doomed. Do you think they'll melt us down? Don't shoot! Don't shoot! Will this never end? Luke, tell Owen that if he gets a translator to be sure it speaks Bocce. I want to learn the ways of the Force and become a Jedi like my father. Mos Eisley Spaceport. You will never find a more wretched hive of scum and villainy. We must be cautious. Do you know what he's talking about? Well, I wonder if he's related to Ben. That old man's just a crazy old wizard. Tomorrow I want you to take that R2 unit into Anchorhead and have its memory flushed. That'll be the end of it. It belongs to us now. But what if this Obi-Wan comes looking for him? He won't, I don't think he exists any more. I'll see what I can do. You know, between his howling and your blasting everything in sight, it's a wonder the whole station doesn't know we're here. Bring them on! I prefer a straight fight to all this sneaking around. We found the computer outlet, sir.</p>"

const appElement = document.getElementById('app')

function render(element) {
  appElement.appendChild(element)
}

function workWithHtml(htmlText) {
  const div = document.createElement('div')
  div.innerHTML = htmlText
  const text = div.querySelector('p').innerText
  
  const component = document.createElement('div')

  const length = text.split(' ').length

  const lengthElement = document.createElement('div')
  lengthElement.style = 'font-weight: 900; color: red;'
  lengthElement.innerText = `Word counter: ${length}`
  component.appendChild(lengthElement)

  const paragraphs = text.split('. ') 
  
  const htmlParagraphs = paragraphs.map((element, index) => {
    const p = document.createElement('p')

    element = element.replaceAll('?', quest)
    element = element.replaceAll('!', wow)

    element = element
      .split(' ')
      .map(word => word.length >= 8
        ? `<span style="background-color: yellow;">${word}</span>`
        : word
      )
      .join(' ')

    p.innerHTML = element + (index === paragraphs.length -1 ? '' : '.' )

    return p
  })

  const mainText = document.createElement('p')

  htmlParagraphs.forEach(element => mainText.appendChild(element))

  const link = document.createElement('a')
  link.href = 'https://forcemipsum.com/'
  link.innerText = 'Link to source'

  component.appendChild(mainText)
  component.appendChild(link)

  return component
}

const component = workWithHtml(text)
render(component)


