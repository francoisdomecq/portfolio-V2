import { motion } from 'framer-motion';
import './SkillCard.css';
import ReactLogo from '../../assets/React.svg';

function SkillCard({ name, img, level, info }) {
    return (
        <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="skill-card"
        >
            <motion.img layout src={img} className="skill-img" alt="" />
            <motion.div layout className="skill-level">
                {level}%
            </motion.div>
            <motion.h1 layout className="skill-name">
                {name}
            </motion.h1>
            <motion.p layout className="skill-info">
                {info}
            </motion.p>
        </motion.div>
    );
}

export default SkillCard;
