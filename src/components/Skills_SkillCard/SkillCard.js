import './SkillCard.css';
import ReactLogo from '../../assets/React.svg';

function SkillCard({ name, img, level, info }) {
    return (
        <div className="skill-card">
            <img src={img} className="skill-img" alt="" />
            <div className="skill-level">{level}%</div>
            <h1 className="skill-name">{name}</h1>
            <p className="skill-info">{info}</p>
        </div>
    );
}

export default SkillCard;
