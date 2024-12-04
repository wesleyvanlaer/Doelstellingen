function makeAccordion(...props) {
  let string = ``;
  for (const k in props) {
    string += `
      <div class='accordion-item w-full ${k == 0 && 'rounded-t-xl'}'>
        <div class='header cursor-pointer flex justify-between items-center p-5 font-medium text-gray-500 border ${k != props.length - 1 && "border-b-0"} border-gray-200 ${k == 0 && 'rounded-t-xl'} hover:bg-blue-100'>
          <p>${props[k].title}</p>
          <svg xmlns='http://www.w3.org/2000/svg' class='circle border border-gray-500 rounded-full p-1 flex-none' width='30' height='30' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
            <path class='line' d='M12 5l0 14'></path>
            <path d='M5 12l14 0'></path>
          </svg>
        </div>
        <div class='hidden toggle border border-gray-200'>
          <div class='p-5 text-black'>
            ${props[k].text}
          </div>
        </div>
      </div>
    `;
  }
  return `<div class='w-full mb-5'>${string}</div>`;
}

const OVI = {
  title: "Ouders voor Inclusie",
  text: `
    <div class='flex flex-col py-2'>
      <h2 class='text-lg font-bold'>Opdrachtgever</h2>
      <p><a href='https://oudersvoorinclusie.be/' target='_blank'>Ouders voor Inclusie</a></p>
    </div>
    <div class='flex flex-col py-2'>
      <h2 class='text-lg font-bold'>Projectomschrijving</h2>
      <p>Wij hebben een cross-platform mobiele applicatie ontwikkeld die zich richt op het monitoren van voeding en beweging. Onze belangrijkste doelstelling was om een gebruiksvriendelijke app te ontwerpen voor de VZW ‘Ouders voor Inclusie’, specifiek ontworpen om mensen met een verstandelijke beperking te ondersteunen.</p>
    </div>
    <div class='flex flex-col py-2'>
      <h2 class='text-lg font-bold'>Projectduur</h2>
      <p>Februari 2024 &rarr; Juni 2024</p>
    </div>
    <div class='flex flex-col py-2'>
      <h2 class='text-lg font-bold'>Links</h2>
      <p>Github Repository: <a href='https://github.com/Thomas-More-Digital-Innovation/2324-OVI-001-Voedingsdagboek-app' target='_blank'>https://github.com/Thomas-More-Digital-Innovation/2324-OVI-001-Voedingsdagboek-app</a><br>Figma: <a href='https://www.figma.com/design/WpvMQuvcNl5sAVtB72fyTq/Prototypes?t=oQ8tVczRi0UMOGMa-1' target='_blank'>https://www.figma.com/design/WpvMQuvcNl5sAVtB72fyTq/Prototypes?t=oQ8tVczRi0UMOGMa-1</a></p>
    </div>
  `,
};


const KGK = {
  title: "Kogeka – Sint Jozef Geel",
  text: `
    <div class='flex flex-col py-2'>
      <h2 class='text-lg font-bold'>Opdrachtgever</h2>
      <p>Middelbaar School: <a href='https://kogeka.be/sintjozef/' target='_blank'>Kogeka – Sint Jozef Geel</a></p>
    </div>
    <div class='flex flex-col py-2'>
      <h2 class='text-lg font-bold'>Projectomschrijving</h2>
      <p>Voor dit project hebben we het proces voor de opleiding Dierenzorg gedigitaliseerd. Dit hebben we gerealiseerd met een webapplicatie waarin zowel leerlingen als leerkrachten hun dagelijkse acties en taken kunnen invoeren. Dankzij deze applicatie is er niet alleen een efficiëntere manier van werken ontstaan, maar is ook de administratieve last voor alle betrokkenen aanzienlijk verlicht. Leerkrachten kunnen eenvoudig voortgang bijhouden en beoordelen, terwijl leerlingen hun taken en voortgang op een overzichtelijke manier kunnen beheren.</p>
    </div>
    <div class='flex flex-col py-2'>
      <h2 class='text-lg font-bold'>Projectduur</h2>
      <p>September 2023 &rarr; Mei 2024</p>
    </div>
    <div class='flex flex-col py-2'>
      <h2 class='text-lg font-bold'>Links</h2>
      <p>Github Repository: <a href='https://github.com/Thomas-More-Digital-Innovation/2324-KGK-001-Plattegrondsysteem-AQT' target='_blank'>https://github.com/Thomas-More-Digital-Innovation/2324-KGK-001-Plattegrondsysteem-AQT</a><br>Figma: <a href='https://www.figma.com/design/wvbqslppDU1QMgZYFfxRG3/Dierenzorg?node-id=0-1t=ARJZ0XT3ochz1V2E-1' target='_blank'>https://www.figma.com/design/wvbqslppDU1QMgZYFfxRG3/Dierenzorg?node-id=0-1t=ARJZ0XT3ochz1V2E-1</a><br>Trello: <a href='https://trello.com/b/BHsZyKHw/kickoff-project' target='_blank'>https://trello.com/b/BHsZyKHw/kickoff-project</a></p>
    </div>
  `,
};


const Pikassa = {
  title: "Thomas More - Pikassa",
  text: `            
  <div class='flex flex-col py-2'> 
    <h2 class='text-lg font-bold'>Opdrachtgever</h2> 
    <p><a href='https://www.thomasmore.be/' target='_blank'>Thomas More</a></p> 
  </div> 
  <div class='flex flex-col py-2'> 
    <h2 class='text-lg font-bold'>Projectomschrijving</h2> 
    <p>Pikkassa is een innovatief kassasysteem, speciaal ontworpen voor mensen met een mentale beperking. Het wordt op onze school gebruikt om hen te ondersteunen bij verkoopactiviteiten.<br><br>Op bepaalde dagen komen scholen, zoals BUSO-scholen, waar leerlingen met een mentale beperking onderwijs volgen, naar onze school om hun zelfgemaakte producten te verkopen. Dit kunnen bijvoorbeeld kaartjes, hangertjes en andere creatieve items zijn.<br><br>Pikkassa stelt deze leerlingen in staat om zelfstandig en eenvoudig hun verkoop te beheren, door hen te helpen met bijvoorbeeld het verwerken van transacties.<br><br>Het systeem maakt deel uit van het startersproject voor tweedejaarsstudenten van DI in het schooljaar 2024-2025. Deze studenten zijn verantwoordelijk voor de ontwikkeling, het onderhoud en de optimalisatie van Pikkassa.<br><br>Ze leren hierbij niet alleen technische vaardigheden zoals programmeren en systeembeheer, maar dragen ook bij aan een belangrijk sociaal doel: het creëren van een veilige, toegankelijke omgeving waarin mensen met een mentale beperking hun vaardigheden kunnen ontwikkelen.<br><br>Het project bevordert zowel technische expertise als maatschappelijke inclusiviteit en zelfstandigheid voor de deelnemende leerlingen.</p> 
  </div> 
  <div class='flex flex-col py-2'> 
    <h2 class='text-lg font-bold'>Projectduur</h2> 
    <p>September 2024 → November 2024</p> 
  </div> 
  <div class='flex flex-col py-2'> 
  <h2 class='text-lg font-bold'>Links</h2> 
    <p> Github Repository: <a href='https://github.com/Thomas-More-Digital-Innovation/2425-TM-012-Eenvoudig-kassasysteem-voor-de-Wagenwinkel' target='_blank'>https://github.com/Thomas-More-Digital-Innovation/2425-TM-012-Eenvoudig-kassasysteem-voor-de-Wagenwinkel</a> <br> Jira: <a href='https://student-team-ggp2srsdpoge.atlassian.net/jira/software/projects/WW/boards/4' target='_blank'>https://student-team-ggp2srsdpoge.atlassian.net/jira/software/projects/WW/boards/4</a> </p> 
  </div>`,
};