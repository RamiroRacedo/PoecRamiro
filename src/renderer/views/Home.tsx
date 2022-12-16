import { Button } from '@mui/material';
import Title from 'renderer/components/Title';
import Profile from './Profile.tsx';

interface HomeProps {
  title: string;
}
function Home({ title }: HomeProps) {
  return (
    <div>
      <Title title={title} />
      <Button href='src\renderer\views\Profile.tsx'>Ver perfil</Button>
    </div>
  );
}

export default Home;
