import PasManquer from "../component/AcceuilCompo/pasManquer/pasManque";
import "./cssPublic/Acceuil.css";
import InfoMag from "../component/AcceuilCompo/infoMag/InfoMag";
import { useState } from "react";
import { SlLike } from "react-icons/sl";
import { MdOutlineSecurity } from "react-icons/md";
import {
  image17,
  image41,
  image44,
  image43,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image14,
  image15,
  image16,
  image18,
  image19,
} from "../assets";
import { Link } from "react-router-dom";
import MyCarousel from "../component/carousel";
import MyCarouselPetit from "../component/carouselPetit";
import { GiConverseShoe } from "react-icons/gi";
import { MdOutlinePhoneAndroid } from "react-icons/md";

const Acceuil = () => {
  const [acceuil, setAcceuil] = useState([
    {
      titre: "Adidas",
      image: image20,
    },
    {
      titre: "Jordan",
      image: image21,
    },
    {
      titre: "Jordane montante",
      image: image22,
    },
    {
      titre: "Nike",
      image: image23,
    },
    {
      titre: "Nike air force",
      image: image24,
    },
    {
      titre: "yeezy",
      image: image25,
    },
    {
      titre: "Adidas",
      image: image20,
    },
    {
      titre: "Jordan",
      image: image21,
    },
    {
      titre: "Jordane montante",
      image: image22,
    },
    {
      titre: "Nike",
      image: image23,
    },
    {
      titre: "Nike air force",
      image: image24,
    },
    {
      titre: "yeezy",
      image: image25,
    },
    {
      titre: "Adidas",
      image: image20,
    },
    {
      titre: "Jordan",
      image: image21,
    },
    {
      titre: "Jordane montante",
      image: image22,
    },
    {
      titre: "Nike",
      image: image23,
    },
    {
      titre: "Nike air force",
      image: image24,
    },
    {
      titre: "yeezy",
      image: image25,
    },
    {
      titre: "Adidas",
      image: image20,
    },
    {
      titre: "Jordan",
      image: image21,
    },
    {
      titre: "Jordane montante",
      image: image22,
    },
    {
      titre: "Nike",
      image: image23,
    },
    {
      titre: "Nike air force",
      image: image24,
    },
    {
      titre: "yeezy",
      image: image25,
    },
  ]);
  const [phone, setPone] = useState([
    {
      titre: "huawei",
      image: image26,
    },
    {
      titre: "iPhone15",
      image: image27,
    },
    {
      titre: "samsung_s24",
      image: image30,
    },
    {
      titre: "sony",
      image: image31,
    },
    {
      titre: "huawei",
      image: image26,
    },
    {
      titre: "iPhone15",
      image: image27,
    },
    {
      titre: "samsung_s24",
      image: image30,
    },
    {
      titre: "sony",
      image: image31,
    },
    {
      titre: "huawei",
      image: image26,
    },
    {
      titre: "iPhone15",
      image: image27,
    },
    {
      titre: "samsung_s24",
      image: image30,
    },
    {
      titre: "sony",
      image: image31,
    },
  ]);
  const [vetement, setVetement] = useState([
    {
      titre: "huawei",
      image: image14,
    },
    {
      titre: "iPhone15",
      image: image15,
    },
    {
      titre: "iphone16",
      image: image16,
    },
    {
      titre: "s23ultra",
      image: image17,
    },
    {
      titre: "samsung_s24",
      image: image18,
    },
    {
      titre: "sony",
      image: image19,
    },
    {
      titre: "huawei",
      image: image14,
    },
    {
      titre: "iPhone15",
      image: image15,
    },
    {
      titre: "iphone16",
      image: image16,
    },
    {
      titre: "s23ultra",
      image: image17,
    },
    {
      titre: "samsung_s24",
      image: image18,
    },
    {
      titre: "sony",
      image: image19,
    },
    {
      titre: "huawei",
      image: image14,
    },
    {
      titre: "iPhone15",
      image: image15,
    },
    {
      titre: "iphone16",
      image: image16,
    },
    {
      titre: "s23ultra",
      image: image17,
    },
    {
      titre: "samsung_s24",
      image: image18,
    },
    {
      titre: "sony",
      image: image19,
    },
  ]);
  const [melange, setMelange] = useState([
    {
      titre: "Adidas",
      image: image20,
    },
    {
      titre: "Jordan",
      image: image21,
    },
    {
      titre: "Jordane montante",
      image: image22,
    },
    {
      titre: "huawei",
      image: image26,
    },
    {
      titre: "iPhone15",
      image: image27,
    },
    {
      titre: "iphone16",
      image: image28,
    },
    {
      titre: "Blouson",
      image: image14,
    },
    {
      titre: "Chemise",
      image: image15,
    },
    {
      titre: "Tee-Short",
      image: image16,
    },
    {
      titre: "iPhone15",
      image: image27,
    },
    {
      titre: "iphone16",
      image: image28,
    },
    {
      titre: "Blouson",
      image: image14,
    },
    {
      titre: "Chemise",
      image: image15,
    },
    {
      titre: "Tee-Short",
      image: image16,
    },
  ]);

  return (
    <>
      <div className="Acceuil_Ac">
        <div className="acceuil_menu">
          <div className="div_text_acceuil">
            <div className="cadre_carousel">
              <div className="box_carousel">
                <MyCarousel />
              </div>
            </div>
            {/* <img width="100%" height="100%" src={image41} /> */}
            <div className="box_img_invisible">
              <div className="box_img1">
                <div className="container_box">
                  <div className="container_box_label">
                    <label id="">Pick up Location</label>
                    <input type="text" placeholder="from wher" />
                  </div>
                  <div className="container_box_label">
                    <label id="">Pick up Location</label>
                    <input type="text" placeholder="from wher" />
                  </div>
                  <div className="container_box_label">
                    <label id="">Pick up Location</label>
                    <input type="text" placeholder="from wher" />
                  </div>
                  <div className="container_box_label">
                    <label id="">Pick up Location</label>
                    <input type="text" placeholder="from wher" />
                  </div>
                </div>
                <div className="acceuil_btn">
                  <button className="btn_acceuil">find shop</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Acceuil_acc">
          <div className="haut">
            <div className="titre_pasManquer">
              {melange.map((p, id) => {
                return (
                  <PasManquer titreA={p.titre} imageA={p.image} key={id} />
                );
              })}
            </div>
          </div>
          <div className="acceuil_intro">
            <div className="acceuil_box_haut">
              <h1>
                <span>Articles</span> Populaire
              </h1>
              <p>
                Telephone, Vetement, Chaussure de soleil ou chaussures qui sont
                <br />
                en forte demande en raison de leur popularité parmi les
                <br />
                célébrités, les influenceurs ou de leur présence dans les
                collections de créateurs.
              </p>
            </div>
          </div>
          <div className="acceuil_titre">
            <div className="titre">
              <Link to="./articles">Telepone</Link>
            </div>
            <div className="titre">
              <Link to="./articles">Vetement</Link>
            </div>
            <div className="titre">
              <Link to="./articles">Chaussure</Link>
            </div>
          </div>
          <div className="haut">
            <div className="titre_Info">
              {acceuil.map((i, id) => {
                return (
                  <InfoMag titreInfo={i.titre} imageInfo={i.image} key={id} />
                );
              })}
            </div>
          </div>
          <div className="container_h">
            <hr className="barre_h" />
          </div>

          <div className="haut">
            <div className="titre_Info">
              {phone.map((i, id) => {
                return (
                  <InfoMag titreInfo={i.titre} imageInfo={i.image} key={id} />
                );
              })}
            </div>
            <div className="titre_bas">
              <p>{}</p>
            </div>
          </div>
          <div className="acceuil_intro">
            <div className="acceuil_box_milieux">
              <div>
                <h1>
                  Le prix raisonnable que vous paierez pour les
                  <span> Articles</span>
                </h1>
              </div>
            </div>
            <div className="image_vetement">
              <div>
                <h2>
                  Vetement de qualité et Produits haut de gamme, réalisés à la
                  main, en éditions limitées, utilisant des matériaux éthiques
                  et durables.
                </h2>
              </div>
              <img width="100%" height="100%" src={image44} />
            </div>
          </div>

          <div className="container_haut1">
            <div className="section_haut1">
              <h1>
                Vetement de <span>qualité</span>
              </h1>
              <h3>
                Élevez votre style avec notre collection exclusive, où chaque
                pièce incarne l’élégance, le raffinement et l’artisanat <br />
                de luxe à son apogée.
              </h3>
            </div>
            <div className="haut1">
              <MyCarouselPetit />
            </div>
          </div>

          <div className="acceuil_dev">
            <div className="dev1">
              <div className="acceuil_dev_titre1">
                <h1>
                  Quelque chose pour que
                  <br /> tu nous <span>aimes Plus</span>
                </h1>
              </div>
              <div className="acceuil_dev_titre2">
                <div className="titre2">
                  <div className="titre_1">
                    <SlLike className="icon_like" />
                  </div>
                  <div className="cadre_description">
                    <h2>
                      <span>Garantie du meilleur tarif</span>
                    </h2>
                    <p>
                      Nous vous offrons le meilleur prix garanti. Si vous
                      trouvez moins cher ailleurs, nous nous engageons à vous
                      proposer un tarif encore plus avantageux !" Chez nous,
                      vous bénéficiez toujours du meilleur prix. Si vous trouvez
                      un tarif inférieur,
                    </p>
                  </div>
                </div>
                <div className="titre2">
                  <div className="titre_2">
                    <GiConverseShoe className="icon_like" />
                  </div>
                  <div className="cadre_description">
                    <h2>
                      <span>Variété de marque de Chaussure</span>
                    </h2>
                    <p>
                      Nike : Leader mondial dans les chaussures de sport, Nike
                      propose une large gamme pour le running, le basketball, le
                      football, et les sports en général. Adidas : Concurrent de
                      Nike, Adidas est réputé pour ses baskets de performance.
                    </p>
                  </div>
                </div>
                <div className="titre2">
                  <div className="titre_3">
                    <MdOutlinePhoneAndroid className="icon_like" />
                  </div>
                  <div className="cadre_description">
                    <h2>
                      <span>Telephone de qualité</span>
                    </h2>
                    <p>
                      Paiements Sécurisés : Les meilleures plateformes de
                      paiement, comme PayPal, Apple Pay, ou Google Pay,
                      utilisent des technologies de cryptage avancées pour
                      garantir la sécurité des informations financières.
                    </p>
                  </div>
                </div>
                <div className="titre2">
                  <div className="titre_4">
                    <MdOutlineSecurity className="icon_like" />
                  </div>
                  <div className="cadre_description">
                    <h2>
                      <span>Votre meilleur securité</span>
                    </h2>
                    <p>
                      Effacement des traces en ligne : Effacez régulièrement
                      votre historique de navigation et utilisez des outils
                      comme CCleaner pour nettoyer vos données de navigation, ou
                      encore DuckDuckGo pour une recherche plus privée.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dev2">
              <img height="100%" width="100%" src={image43} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Acceuil;
