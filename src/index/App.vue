<template>
  <div class="App">
    <header>
      <h1>Блог</h1>
    </header>

    <main>
      <article>
        <h2>Записи</h2>
        <section>
          <Post
              v-for="(post, index) in posts"
              :key="index"
              :post="post"
              @delete="handleDelete(index)"
              @archive="handleArchive(index)"
          />
        </section>
      </article>

      <aside>
        <h2>Создать запись</h2>
        <form @submit.prevent="handleSubmit">
          <div>
            <label for="author">Автор</label>
            <input
                required
                type="text"
                id="author"
                minlength="3"
                class="no-border"
                v-model="author"
            />
          </div>
          <div>
            <label for="title">Заголовок</label>
            <input
                required
                type="text"
                id="title"
                minlength="3"
                v-model="title"
            />
          </div>
          <div>
            <label for="category">Категория</label>
            <input
                required
                type="text"
                id="category"
                minlength="3"
                class="no-border"
                v-model="category"
            />
          </div>
          <div>
            <label for="content">Содержание</label>
            <textarea
                required
                id="content"
                v-model="content"
            ></textarea>
          </div>
          <button type="submit" id="createButton">
            <strong>Создать</strong>
          </button>
        </form>

        <div>
          <h2>Архив</h2>
          <ol id="archive-list" ref="archiveList"></ol>
        </div>
      </aside>
    </main>
  </div>
</template>

<script>
import Post from '../components/Post.vue';

export default {
  components: {
    Post,
  },
  data() {
    return {
      posts: [],
      title: '',
      category: '',
      author: '',
      content: '',
    };
  },
  methods: {
    handleSubmit() {
      const newPost = {
        title: this.title,
        category: this.category,
        author: this.author,
        content: this.content,
      };
      this.posts.push(newPost);

      this.title = '';
      this.category = '';
      this.author = '';
      this.content = '';
    },
    handleDelete(index) {
      this.posts.splice(index, 1);
    },
    handleArchive(index) {
      const archivedTitle = this.posts[index].title;
      this.posts.splice(index, 1);

      const listItem = document.createElement('li');
      listItem.textContent = archivedTitle;
      this.$refs.archiveList.appendChild(listItem);
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
}

.App {
  text-align: left;
  font-size: 18px;
  font-family: Arial, sans-serif;
}

header {
  background-color: #006b09;
  border-bottom: 3px solid #07b148;
  padding: 10px 0;
}

header h1 {
  color: #ffffff;
  margin: 5px;
}

main {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 30px;
  gap: 2%;
}

article {
  border: dashed 0.2rem #006b09;
  border-radius: 15px;
  box-shadow: 0.5em 1em 0.5em 0em rgba(64, 73, 59, 0.281);
  padding: 20px;
  width: 70%;
}

article h2 {
  color: black;
  border-bottom: 3px solid #07b148;
}

aside {
  border: dashed 0.2rem #006b09;
  border-radius: 15px;
  box-shadow: 0.5em 1em 0.5em 0em rgba(64, 73, 59, 0.281);
  padding: 20px;
  width: 25%;
}

aside h2 {
  color: black;
  border-bottom: 3px solid #07b148;
}

aside form {
  margin-top: 20px;
}

aside input {
  width: 100%;
}

form div {
  margin-bottom: 15px;
}

form label {
  display: block;
}

form .no-border {
  border-radius: 0;
  border: none;
  border-bottom: 2px solid #40493b;
}

form input, form textarea {
  border-bottom: 2px solid #40493B;
  border-radius: 0;
  padding: 5px;
}

textarea {
  width: 100%;
  min-height: 20%;
  box-sizing: border-box;
  resize: vertical;
}

#createButton {
  background-color: #006b09;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
}

button:focus {
  background-color: #07b148;
}

#archive-list {
  list-style-type: square;
  padding-left: 20px;
  word-wrap: break-word;
  white-space: normal;
}

@media (max-width: 700px) {
  main {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  article, aside {
    width: 90%;
    margin-bottom: 20px;
  }
}
</style>
