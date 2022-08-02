import { Post } from './Post';

export function App() {

  return (
    <div>
      <Post 
        author='Fábio Dantas'
        content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. A perferendis dolor facilis voluptates corporis ex sit dolorum aspernatur nisi, vel quo vero. Consectetur odio excepturi assumenda sunt, eum porro ullam!'
      />

      <Post
        author='Gabriel Dantas'
        content='New post for test'
      />

    </div>
  );
}