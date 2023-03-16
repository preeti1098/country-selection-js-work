
document.querySelector('.country').addEventListener('change', function () {


    let selectedcountry = document.querySelector('.country').value

    if (selectedcountry === 'India') {
        document.querySelector('.output').innerHTML = `
    <h1> India</h1>
    <img src="img/india-flag.jfif"/>
    <table>
    <tr>
    <td>Capital</td>
    <td>New Delhi</td>
    </tr>
    <tr>
    <td>Official Lang.</td>
    <td>Hindi</td>
    </tr>

    <tr>
    <td>Currency</td>
    <td>Indian rupee</td>
    </tr>
    <tr>
    <td>Population</td>
    <td>1,375,586,000</td>
    </tr>
    </table>
    <p>India, officially the Republic of India (Hindi: Bhārat Gaṇarājya),is a country in South Asia. It is the seventh-largest country
     by area and the second-most populous country. Bounded by the Indian Ocean on the south,
    the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it
    shares land borders with Pakistan to the west; China, Nepal, and Bhutan to the north; 
    and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and
     the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar, and Indonesia.
     <br/>
     Modern humans arrived on the Indian subcontinent from Africa no later than 55,000 years ago. Their long occupation, initially 
     in varying forms of isolation as hunter-gatherers, has made the region highly diverse, second only to Africa in human
      genetic diversity. Settled life emerged on the subcontinent in the western margins of the Indus river basin 9,000 years ago,
       evolving gradually into the Indus Valley Civilisation of the third millennium BCE. By 1200 BCE, an archaic form of Sanskrit,
        an Indo-European language, had diffused into India from the northwest.Its evidence today is found in the hymns of the
         Rigveda. Preserved by a resolutely vigilant oral tradition, the Rigveda records the dawning of Hinduism in India.
          The Dravidian languages of India were supplanted in the northern and western regions. By 400 BCE,
      stratification and exclusion by caste had emerged within Hinduism

    </p>
    `


    } else if (selectedcountry === 'Japan') {
        document.querySelector('.output').innerHTML = `
    <h1>Japan</h1>
    <img src="img/download.png"/>
    <table>
    <tr>
    <td>Capital</td>
    <td>Tokyo</td>
    </tr>
    <tr>
    <td>Official Lang.</td>
    <td>Japanese</td>
    </tr>

    <tr>
    <td>Currency</td>
    <td>Yen</td>
    </tr>
    <tr>
    <td>Population</td>
    <td>12.57 crores</td>
    </tr>
    </table>
    <p>A Paleolithic culture from around 30,000 BC constitutes the first known habitation of 
    the islands of Japan. This was followed from around 14,500 BC (the start of the Jōmon period) by
     a Mesolithic to Neolithic semi-sedentary hunter-gatherer culture characterized by pit dwelling and rudimentary
      agriculture. Clay vessels from the period are among the oldest surviving examples of pottery.From around 700 BC,
       the Japonic-speaking Yayoi people began to enter the archipelago from the Korean Peninsula, intermingling with 
       the Jōmon; the Yayoi period saw the introduction of practices including wet-rice farming,[22] a new style of pottery,
        and metallurgy from China and Korea. According to legend, Emperor Jimmu (grandson of Amaterasu) founded a kingdom in 
        central Japan in 660 BC, beginning a continuous imperial line.
        <br/>
        Japan first appears in written history in the Chinese Book of Han, completed in 111 AD. Buddhism was 
        introduced to Japan from Baekje (a Korean kingdom) in 552, but the development of Japanese Buddhism was primarily influenced
         by China. Despite early resistance, Buddhism was promoted by the ruling class, including figures like Prince 
        Shōtoku, and gained widespread acceptance beginning in the Asuka period 

    </p>
   
    `


    } else if (selectedcountry === 'Australia') {
        document.querySelector('.output').innerHTML = `
    <h1>Australia</h1>
    <img src="img/aust-flag.png"/>
    <table>
    <tr>
    <td>Capital</td>
    <td>Canberra</td>
    </tr>
    <tr>
    <td>Official Lang.</td>
    <td>English</td>
    </tr>

    <tr>
    <td>Currency</td>
    <td>Australian Dollar</td>
    </tr>
    <tr>
    <td>Population</td>
    <td>26,065,400</td>
    </tr>
    </table>
    <p>Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent,
     the island of Tasmania, and numerous smaller islands.With an area of 7,617,930 square kilometres (2,941,300 sq mi),
      Australia is the largest country by area in Oceania and the world's sixth-largest country. Australia is the oldest,
       flattest, and driest inhabited continent, with the least fertile soils.It is a megadiverse country, and its size gives it
        a wide variety of landscapes and climates, with deserts in the centre, tropical rainforests in the north-east, and mountain 
        ranges in the south-east.
        <br/>
        The ancestors of Aboriginal Australians began arriving from south-east Asia approximately 
        65,000 years ago, during the last ice age. Arriving by sea, they settled the continent and had formed 
        approximately 250 distinct language groups by the time of European settlement, maintaining some of the longest known
         continuing artistic and religious traditions in the world. Australia's written history commenced with the European maritime 
         exploration of Australia. The Dutch navigator Willem Janszoon was the first known European to reach Australia, in 1606. In 1770,
          the British explorer James Cook mapped and claimed the east coast of Australia for Great Britain, and the First Fleet of British 
          ships arrived at Sydney in 1788 to establish the penal colony of New South Wales. The European population grew in subsequent
           decades, and by the end of the 1850s gold rush, 
        most of the continent had been explored by European settlers and an additional five 

    </p>
   
    `


    } else if (selectedcountry === 'France') {
        document.querySelector('.output').innerHTML = `
    <h1>France</h1>
    <img src="img/france-flag.png"/>
    <table>
    <tr>
    <td>Capital</td>
    <td>Paris</td>
    </tr>
    <tr>
    <td>Official Lang.</td>
    <td>French</td>
    </tr>

    <tr>
    <td>Currency</td>
    <td>Euro</td>
    </tr>
    <tr>
    <td>Population</td>
    <td>6.77 crores</td>
    </tr>
    </table>
    <p>France (French: [fʁɑ̃s] Listen), officially the French Republic (French: République française
         [ʁepyblik frɑ̃sɛz]),[14] is a country located primarily in Western Europe. It also includes overseas
          regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans,[XII] giving it one of the
           largest discontiguous exclusive economic zones in the world. Its metropolitan area extends from the Rhine to the 
           Atlantic Ocean and from the Mediterranean Sea to the English Channel and the North Sea; overseas territories include 
           French Guiana in South America, Saint Pierre and Miquelon in the North Atlantic, the French West Indies, and many islands 
           in Oceania and the Indian Ocean. Its eighteen integral regions (five of which are overseas) span a combined area of 643,801
            km2 (248,573 sq mi) and had a total population of over 68 million as of January 2023.[5][8] France is a unitary
             semi-presidential republic with its capital in Paris,<br/> the country's largest city and main cultural and commercial centre;
              other major urban areas include Marseille, Lyon, Toulouse, Lille, Bordeaux, and Nice.

    </p>
   
    `


    } else if (selectedcountry === 'Thailand') {
        document.querySelector('.output').innerHTML = `
    <h1>Thailand</h1>
    <img src="img/thailand-flag.png"/>
    <table>
    <tr>
    <td>Capital</td>
    <td>Bangkok</td>
    </tr>
    <tr>
    <td>Official Lang.</td>
    <td>Thai</td>
    </tr>

    <tr>
    <td>Currency</td>
    <td>Bhat</td>
    </tr>
    <tr>
    <td>Population</td>
    <td>7.16 crores</td>
    </tr>
    </table>
    <p>Thailand, historically known as Siam (/saɪˈæm, ˈsaɪæm/) and officially the Kingdom of Thailand, 
    is a country in Southeast Asia, located at the centre of the Indochinese Peninsula, spanning 513,120 square kilometres
     (198,120 sq mi), with a population of almost 70 million. The country is bordered to the north by Myanmar and Laos, 
     to the east by Laos and Cambodia, to the south by the Gulf of Thailand and Malaysia, and to the west by the Andaman Sea and 
     the extremity of Myanmar. Thailand also shares maritime borders with Vietnam to the southeast, and Indonesia and India to the
      southwest. Bangkok is the nation's capital and largest city.

    </p>
   
    `


    }



})
