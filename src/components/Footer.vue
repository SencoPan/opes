<template>
  <div class="footer">
    <div class="content">
      <div class="info-block">
        <div class="user-info">
          <span> Информация </span>
          <a href="https://github.com/SencoPan">
            Пользовательское соглашение
          </a>
          <a href="https://github.com/SencoPan">
            Политика конфиденциальности
          </a>
        </div>
        <div class="contact">
          <a class="contact-site"><i class="fab fa-vk"></i></a>
          <a class="contact-site"><i class="fab fa-github"></i></a>
          <a class="contact-site"><i class="fab fa-telegram"></i></a>
        </div>
      </div>
      <div class="copyright">
        <a href="https://github.com/SencoPan"> © 2020 OPES, Inc. </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
div.footer {
  display: flex;
  justify-content: center;
  background: #fafafa;
  margin: auto 0 0 0;
  height: 8em;
}

div.content {
  display: flex;
  width: 90em;
  flex-direction: column;
}
.copyright {
  margin-top: auto;
  margin-bottom: 1em;
}
div.copyright a {
  color: #2c3e50;
  text-decoration: none;
  margin: auto;
}
.info-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  margin-top: auto;
  margin-bottom: 1.3em;
}
.info-block .user-info a {
  margin: 0;
  font-size: 0.9em;
  text-decoration: none;
  color: #7c8eec;
}
.user-info {
  display: flex;
  flex-direction: column;
}
.user-info span {
  font-size: 1.1em;
  color: #2c3e50;
  margin-bottom: 0.1em;
}
.contact {
  display: flex;
}
.contact a {
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 1.7em;
  text-align: center;
}

.contact a::after {
  content: "";
  margin-left: 0.3em;
}
</style>
