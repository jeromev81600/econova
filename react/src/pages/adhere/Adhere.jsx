import './Adhere.scss'
import Navbar from '../../components/Navbar/Navbar';
import FooterTop from '../../components/Footer/FooterTop';
import FooterBottom from '../../components/Footer/FooterBottom';

function Adhere() {

  return (
    <div className='adhereMainDiv'>
      <Navbar/>
      <h1>Soutenez-nous</h1>
      <section className='adhereCharterSection'>
       <h2 className="adhereTitlesSections">Notre Charte</h2>
       <p className="adhereText"><span>« Notre objectif : amplifier l’action environnementale et encourager la défense des droits humains à travers le monde »</span></p>
       <p className="adhereText">Nous croyons en la capacité de l’humanité à agir face aux défis cruciaux de la préservation de l’environnement et du vivant.Pour cela, les médias ont un devoir de responsabilité et d’information majeur.<br/></p>
       <p className="adhereText"><span>Comment ?</span><br/></p>
       <ul>
        <li className="adhereText">En partageant les connaissances établies par les communautés scientifiques et expertes dans leurs domaines,</li>
        <li className="adhereText">En soutenant des modèles économiques et des projets orientés vers un développement durable et éthique de nos sociétés,</li>
        <li className="adhereText">En œuvrant pour faire émerger une nouvelle forme de lobbying grâce à la promotion d’innovations, produits ou services adaptés.</li>
       </ul>
       <p className="adhereText">L’ensemble de nos partenaires devront démontrer leur volonté d’agir en s’attachant à atteindre ces mêmes objectifs, en veillant à diminuer leurs impacts dans les limites imposées par leur activité pour atteindre des SCOPE raisonnables et/ou répondre, autant que possible, aux exigences des dernières évolutions de la R.S.E (voir <span>C.S.R.D.</span> et <span>GreenHouse Gas Protocol</span>).</p>
       <p className="adhereText">En faisant appel à nos services ou en collaborant avec nous, vous financez un principe régénératif et participatif de diffusion de l’information à l’international.</p>
       <p className="adhereText"><span>Régénératif</span>, car l’ensemble des bénéfices seront investis dans la production et la réalisation indépendantes de documentaires, émissions, interviews et reportages dont le but sera de transmettre des informations factuelles et objectives sur les études scientifiques fondées, les écogestes et bonnes pratiques à adopter, les organismes et associations efficaces et imaginatifs dans leur façon de concevoir notre avenir.</p> 
       <p className="adhereText"><span>Participatif</span>, car nous souhaitons intégrer l'ensemble de nos collaborateurs ainsi que tous les acteurs des thématiques évoquées précédemment dans notre projet et donner la parole à l’ensemble des membres de chaque communauté…<br/>…à l’<span>international</span>, car les problématiques sont mondiales et notre capacité à influer pour inciter au passage à l’action, d’autant plus importante.</p>
       <p className="adhereText"><span>Nos valeurs </span>: Respect de l’environnement et des droits humains, optimisme pragmatique et bienveillance, solidarité et tolérance.</p>
       <p className="adhereText">Dans un soucis de neutralité et d’équité, nos collaborateurs devront également assurer leurs prestations en respectant les positions idéologiques, politiques et religieuses de nos clients ou de nos interlocuteurs.</p>
       <p className="adhereText">Petites, moyennes et grandes entreprises, associations, artistes, membres de communautés scientifiques, publiques ou privées, citoyen(ne)s,<span> rejoignez l’aventure</span>.</p>
       <p className="adhereText">Soutenez notre projet et contribuez à la création d’un concept [éco]novateur (pour adhérer ou contribuer, c’est par ici).</p>
      </section>
      <section className='adhereFundingSection'>
      <h2 className="adhereTitlesSections">Financer l'aventure (Tepee)</h2>
      <p className="adhereText">Vous souhaitez participer ou devenir éconovateur.</p>
      <p className="adhereText">Abonnez-vous ou faites un don sur notre plateforme <span>Tepee</span>.</p>
      <p className="adhereText">Après une rapide évaluation de la pertinence de votre contenu par notre comité d’experts scientifiques, vous pourrez diffuser vos messages sur l’ensemble de nos réseaux sociaux (voir conditions*).</p>
      <p className="adhereText">Evènements régionaux, actions militantes, lettre ouverte, tips et écogestes, <span>la parole est à vous !</span></p>
      <h3>Notre comité scientifique</h3>
      <p className="adhereText"><span>Joël Gréa</span><br/></p>
      <p className="adhereText">Conférencier sur les enjeux environnementaux et l’effondrement des civilisations<br/>Egalement membre du comité scientifique de “Team For The Planet” et co-fondateur de “Mush”</p>
      </section>
      <FooterTop/>
      <FooterBottom/>
    </div>
  )
}

export default Adhere;
