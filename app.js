var quotes = [
  'Somewhere, something incredible is waiting to be known.', 
  'Science is a way of thinking much more than it is a body of knowledge.', 
  'Imagination will often carry us to worlds that never were. But without it we go nowhere.', 
  "Look again at that dot. That's here. That's home. That's us.", 
  "To me, it underscores our responsibility to deal more kindly with one another, and to preserve and cherish the pale blue dot, the only home we've ever known.", 
  "If you wish to make an apple pie from scratch, you must first invent the universe.", 
  "Every one of us is, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another.", 
  "Science is not only compatible with spirituality; it is a profound source of spirituality.", 
  "One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time.", 
  "For small creatures such as we the vastness is bearable only through love.", 
  "It pays to keep an open mind, but not so open your brains fall out.", 
  "The universe is a pretty big place. If it's just us, seems like an awful waste of space.", 
  "The universe is a pretty big place. If it's just us, seems like an awful waste of space.", 
  "The universe is a pretty big place. If it's just us, seems like an awful waste of space.", 
  "The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.", 
  "I don't want to believe. I want to know.", 
  "The beauty of a living thing is not the atoms that go into it, but the way those atoms are put together."
]

function newQuote() {
  var randNum = Math.floor(Math.random() * (quotes.length))
  document.getElementById('quoteDisplay').innerHTML = quotes[randNum]


}