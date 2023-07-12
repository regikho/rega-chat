import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';


const Home = ({ username, setUsername, room, setRoom, socket }) => {
    const navigate = useNavigate()
    
    const joinRoom = () => {
        if (room !== '' && username !== '') {
          socket.emit('join_room', { username, room });
        }

        navigate('/chat', { replace: true });
    }
  
    return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`Добро пожаловать!`}</h1>
        <input 
            className={styles.input} 
            placeholder='Ваше имя' 
            onChange={(e) => setUsername(e.target.value)}
        />

        <select 
            className={styles.input} 
            onChange={(e) => setRoom(e.target.value)}
        >
          <option>-- Выбрать чат --</option>
          <option value='Frontend chat'>Frontend</option>
          <option value='Backend chat'>Backend</option>
          <option value='Devops chat'>Devops</option>
          <option value='Product Managers chat'>Product Managers</option>
        </select>

        <button 
            className='btn btn-secondary'
            onClick={joinRoom} 
            style={{ width: '100%' }}
        >
            Присоединиться
        </button>
      </div>
    </div>
  );
};

export default Home;
