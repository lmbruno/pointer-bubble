import { FollowMouse } from './components/FollowMouse';
import './style.css';

export function App() {
  return (
    <main style={{ display: 'grid', placeContent: 'center' }}>
      <FollowMouse></FollowMouse>
    </main>
  );
}
