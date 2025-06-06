// About.tsx
import portrait from "../../../public/assets/images/self_picture.jpg";
import "./ProfileSection.scss";

type ProfileSectionProps = {};

export const ProfileSection = ({}: ProfileSectionProps) => {
  return (
    <section className="about-section">
      <div className="introduction">
        <figure>
          <img
            className="portrait-img"
            src={portrait}
            alt="Photo de profil de Royer Julia"
          />
        </figure>
        <article>
          <h1>Développeuse Front-End</h1>
          <div className="about-me">
            <p>
              Je m'appelle <strong>Julia Royer</strong>, développeuse front-end
              en devenir, fraîchement diplômée du parcours Intégrateur /
              Développeur web sur OpenClassrooms (mai 2025).
              <br /> Curieuse et touche-à-tout, je navigue entre code, dessin,
              musique assistée par ordinateur et biologie — avec toujours la
              même envie : comprendre comment les choses fonctionnent.
            </p>
            <p>
              Ma formation m’a permis d’acquérir de solides bases en HTML, CSS,
              JavaScript et React. Aujourd’hui, je souhaite approfondir mes
              compétences en développement front, tout en élargissant mes
              horizons du côté serveur. Les bases de données, les API, les
              nouveaux langages de programmation.
              <br /> Je suis impatiente de m’y plonger pour bâtir des
              applications complètes.
            </p>
          </div>
        </article>
      </div>

      <div className="profile-sections">
        <section id="strengths" className="info-box">
          <h2>Mes points forts : </h2>
          <ul>
            <li>
              ✨ Curiosité intellectuelle, nourrie par un parcours éclectique
            </li>
            <li>
              🎤 Aisance à l’oral, Énergique et Dynamique dans mes présentations
              !
            </li>
          </ul>
        </section>

        <section id="goals" className="info-box">
          <h2> Où je souhaite aller ? </h2>
          <ul>
            <li>🧬 Technologies biomédicales : allier code et soin</li>
            <li>🎭 Plateformes culturelles : rendre l’art interactif</li>
            <li>🔍 Intelligence artificielle : créer des outils qui pensent</li>
            <li>🔐 Cybersécurité : Mieux protéger</li>
          </ul>
        </section>
      </div>
    </section>
  );
};
