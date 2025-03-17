import { useSelector } from 'react-redux';
import { RootState } from '@/modules/store';

const Home = () => {
  const { name, age } = useSelector((state: RootState) => state.user);
  return (
    <div>
      Home content: {name} {age}
    </div>
  );
};

export default Home;
