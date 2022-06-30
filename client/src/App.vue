<script setup>
import Navbar from './components/partials/Navbar.vue'
</script>

<template>
  <div class="app">
    <Navbar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 18px;
}
img {
  width: 100%;
}
.header {
  font-size: 1.5rem;
  text-align: center;

}

/* fixed */
.fixed {
  left: 0;
  top: 0;
  position: fixed;
  background: rgba(0,0,0,0.6);
  width: 100%;
  height: 100%;
}

.fixed .content-center {
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%,-50%);
  padding: 10px;
  font-size: 1.2rem;
  background: #fff;
  box-shadow: 3px 3px 0 #333;
  width: 80%;
}
@media (max-width: 500px){
  .fixed .content-center {
    width: 99%;
  }
}
.fixed .content-center .header,
.fixed .content-bottom .header {
  text-align: center;
  font-size: 1.4rem;
  margin-bottom: 10px;
  text-transform: capitalize;
}
.fixed .content-bottom {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  background: #fff;
  padding: 10px 0;
}

/* container */
.container {
  width: 100%;
  margin: 1 auto;
  margin-top: 4rem;
}

/* button */
.btn-group{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;

}
.btn-group > .right {
  justify-self: flex-end;
  margin-left: auto;
}
.btn-group .btn {
  margin-right: 10px;
  margin-bottom: 10px;
}
.btn {
  display: inline-block;
  padding: 4px 8px;
  outline: none;
  cursor: pointer;
  font-size: 1.3rem;
  background: teal;
  color: #fff;
  text-transform: capitalize;
  text-decoration: none;
  border: none;
}
.btn:hover {
  background: rgb(3, 100, 100);
}
/* background */
.bg-red {
  background: rgb(230, 60, 60);
  color: #fff;
}
.bg-red:hover {
  background: rgb(196, 41, 41);
}
.bg-teal {
  background: teal;
}

/* text */
.white-text {
  color: #fff;
}
.red-text {
  color: rgb(230, 60, 60);
}
.teal-text {
  color: teal;
}

/* message */
.message {
  width: 100%;
  display: block;
  margin: 10px auto;
  text-align: center;
  font-size: 1.2rem;
  text-transform: capitalize;
}
.red {
  color: red;
}


/* form */
.c-form {
  margin: 1px 0;

}
.form-group {
  margin: 10px 0;
}
.c-form label {
  width: 100%;
  font-size: 1.2rem;
  margin-bottom: 10px;
}
.c-form label .msg {
  margin-left: 10px;
  font-size: 17px;
  font-weight: 100;
}
.c-form label .red {
  color: red;
}

/* input text */
.form-text {
  width: 100%;
  padding: 4px 0px;
  font-size: 1.2rem;
  outline: none;
  border: none;
  border-bottom: 2px solid teal;
  margin-bottom: 6px;
}
.form-text:focus {
  background: #fff;
}

/* input textarea */

/* t-form */
.t-form {
  margin: 1px 0;
}
.t-form .form-group {
  margin: 10px 0;
}
.t-form .form-group > label {
  width: 100%;
  font-size: 1.2rem;
  margin-bottom: 10px;
  display: block;
}
.t-form .form-group label > .msg {
  font-size: 1.2rem;
  color: red;
  display: inline;
  margin-left: 10px;
  text-transform: capitalize;
}

.t-form .form-group > input[type="text"] {
  width: 100%;
  padding: 4px 0px;
  font-size: 1.2rem;
  outline: none;
  border: none;
  border-bottom: 2px solid teal;
  margin-bottom: 6px;
}
.t-form .form-group > input[type="number"],
.t-form .form-group > input[type="password"] {
  width: 100%;
  font-size: 1.2rem;
  outline: none;
  border: none;
  border-bottom: 2px solid teal;
}

.t-form .form-group > textarea {
  width: 100%;
  resize: none;
  border: none;
  outline: none;
  border-bottom: 2px solid teal;
  min-height: 100px;
}

/* list */
.list {
  width: 100%;
}
.list .list-item {
  font-size: 1.2rem;
  padding: 4px 3px;
  border-bottom: 1px solid teal;
  cursor: pointer;
}

</style>
