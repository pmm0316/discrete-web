import { HeartFilled } from '@ant-design/icons';
import routes from 'config/routes';

console.log('routes', routes);

export default function Test() {
  return (
    <div>
      <h1 style={{ color: 'blue' }}>
        谭寒梅
        <HeartFilled style={{ color: 'red', marginLeft: 5 }} />
      </h1>
    </div>
  );
}
