import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
//import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src='./threejs.png'
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div{...headTextAnimation}>
            <h1 className='head-text'>
              LET'S <br className='x1:block hidden'/> DO IT.
            </h1>
          </motion.div>
          <p className='max-w-md font-normal text-gray-600 text-base'>
            Create your unique shirt design with our brand new 
            3D customization tool. <b>Unleash Your Imagination</b>.
          </p>

        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
