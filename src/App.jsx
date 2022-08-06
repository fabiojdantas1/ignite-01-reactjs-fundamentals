import { Header } from './components/Header';
import { Post } from './Post';
import styles   from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {

  return (
    <div>
      
      <Header />
      
      <div className={styles.wrapper}>

        <Sidebar />
        <main>
          <Post 
            author='Fábio Dantas'
            content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. A perferendis dolor facilis voluptates corporis ex sit dolorum aspernatur nisi, vel quo vero. Consectetur odio excepturi assumenda sunt, eum porro ullam!'
          />

          <Post
            author='Gabriel Dantas'
            content='New post for test'
          />
        </main>
      </div>

    </div>
  );
}