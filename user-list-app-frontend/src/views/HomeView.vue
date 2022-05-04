<template>
  <div class="container">
    <div class="info-text">
      <div class="description">
        <span class="title">Teste Engenheiro de Software Full Stack</span>
        <span class="subtitle"
          >Desenvolva no padrão MVC. Use e abuse da Orientação a Objetos</span
        >
      </div>
    </div>
    <div class="container-table">
      <div class="header-table">
        <button
          class="btn-save btn-margin"
          type="button"
          @click.prevent="addUser(true)"
        >
          Cadastrar
        </button>
        <input class="input-search" placeholder="Busca" type="text" />
      </div>
      <table class="table-users">
        <thead class="thead-users">
          <tr>
            <th scope="col">
              ID <img src="../assets/filter.svg" alt="filter" />
            </th>
            <th scope="col">
              Nome <img src="../assets/filter.svg" alt="filter" />
            </th>
            <th scope="col">
              Idade <img src="../assets/filter.svg" alt="filter" />
            </th>
            <th scope="col">
              GitHub User <img src="../assets/filter.svg" alt="filter" />
            </th>
            <th scope="col">
              Endereço <img src="../assets/filter.svg" alt="filter" />
            </th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user._id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.githubUser }}</td>
            <td>
              {{ user.street }}, {{ user.number }} - {{ user.district }} -
              {{ user.city }}/{{ user.state }}
            </td>
            <td>
              <a href="" @click.prevent="editUser(user)">
                <img
                  src="../assets/eye.svg"
                  alt="view-icon"
                  class="view-icon"
                />
              </a>
            </td>
            <td>
              <a href="" @click.prevent="deleteUser(user)">
                <img
                  src="../assets/trash.svg"
                  alt="delete-icon"
                  class="delete-icon"
                />
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <!--- modal criar --->
      <div
        class="vue-modal"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        v-if="isFormCreateUserMode"
      >
        <div class="vue-modal-inner" role="document">
          <div class="vue-modal-content">
            <div class="info">
              <h5
                v-show="isFormCreateUserMode"
                class="info-add"
                id="exampleModalLabel"
              >
                Salvar
              </h5>

              <span
                class="info-close"
                aria-hidden="true"
                @click.prevent="closeModal(false)"
                >×</span
              >
            </div>
            <form id="create-post-form" @submit.prevent="createUser()">
              <div class="form-container">
                <div class="container-info">
                  <div class="form-group-id">
                    <label for="title">ID</label>
                    <input
                      type="text"
                      id="id"
                      v-model="id"
                      name="title"
                      class="form-control"
                      placeholder="Digite um ID"
                    />
                  </div>
                  <div class="form-group-name">
                    <label for="title"> Nome </label>
                    <input
                      type="text"
                      id="name"
                      v-model="name"
                      name="title"
                      class="form-control"
                      placeholder="Digite um nome"
                    />
                  </div>
                </div>

                <div class="container-info">
                  <div class="form-group-age">
                    <label for="title"> Idade </label>
                    <input
                      type="number"
                      id="age"
                      v-model="age"
                      name="title"
                      class="form-control"
                      placeholder="0"
                    />
                  </div>
                  <div class="form-group-github">
                    <label for="title"> GitHub User </label>
                    <input
                      type="text"
                      id="github_user"
                      v-model="githubUser"
                      name="title"
                      class="form-control"
                      placeholder="Usuário do Github"
                    />
                  </div>
                </div>

                <div class="container-info">
                  <div class="form-group-cep">
                    <label for="title"> CEP </label>
                    <input
                      type="text"
                      id="cep"
                      v-model="cep"
                      name="title"
                      max-length="8"
                      class="form-control"
                      placeholder="0000000"
                      @keyup="onKeyup"
                      @keydown="onKeydown($event)"
                    />
                  </div>
                  <div class="form-group-state">
                    <label for="title"> Estado </label>
                    <select
                      class="selectpicker form-control"
                      data-live-search="true"
                      name="title"
                      id="state"
                      v-model="state"
                    >
                      <option value="" disabled selected>---</option>
                      <option value="AC">Acre</option>
                      <option value="AL">Alagoas</option>
                      <option value="AP">Amapá</option>
                      <option value="AM">Amazonas</option>
                      <option value="BA">Bahia</option>
                      <option value="CE">Ceará</option>
                      <option value="DF">Distrito Federal</option>
                      <option value="ES">Espírito Santo</option>
                      <option value="GO">Goiás</option>
                      <option value="MA">Maranhão</option>
                      <option value="MT">Mato Grosso</option>
                      <option value="MS">Mato Grosso do Sul</option>
                      <option value="MG">Minas Gerais</option>
                      <option value="PR">Paraná</option>
                      <option value="PB">Paraíba</option>
                      <option value="PA">Pará</option>
                      <option value="PE">Pernambuco</option>
                      <option value="PI">Piauí</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="RN">Rio Grande do Norte</option>
                      <option value="RS">Rio Grande do Sul</option>
                      <option value="RO">Rondônia</option>
                      <option value="RR">Roraima</option>
                      <option value="SC">Santa Catarina</option>
                      <option value="SE">Sergipe</option>
                      <option value="SP">São Paulo</option>
                      <option value="TO">Tocantins</option>
                    </select>
                  </div>
                  <div class="form-group-city">
                    <label for="title"> Cidade </label>
                    <input
                      type="text"
                      id="city"
                      v-model="city"
                      name="title"
                      class="form-control"
                      placeholder="Selecione a cidade"
                    />
                  </div>
                  <div class="form-group-district">
                    <label for="title"> Bairro </label>
                    <input
                      type="text"
                      id="district"
                      v-model="district"
                      name="title"
                      class="form-control"
                      placeholder="Selecione o bairro"
                    />
                  </div>
                </div>
                <div class="container-info">
                  <div class="form-group-street">
                    <label for="title"> Rua </label>
                    <input
                      type="text"
                      id="street"
                      v-model="street"
                      name="title"
                      class="form-control"
                      placeholder="Jardinete Juventina"
                    />
                  </div>
                  <div class="form-group-number">
                    <label for="title"> Número </label>
                    <input
                      type="text"
                      id="number"
                      v-model="number"
                      name="title"
                      class="form-control"
                      placeholder="--"
                    />
                  </div>
                  <div class="form-group-complement">
                    <label for="title"> Complemento </label>
                    <input
                      type="text"
                      id="complement"
                      v-model="complement"
                      name="title"
                      class="form-control"
                      placeholder="--"
                    />
                  </div>
                </div>
              </div>
              <div class="button-container">
                <div class="form-group">
                  <button
                    class="btn-cancel"
                    type="button"
                    data-dismiss="modal"
                    @click.prevent="closeModal(false)"
                  >
                    Cancelar
                  </button>
                </div>
                <div class="form-group">
                  <button
                    class="btn-save"
                    type="submit"
                    v-show="isFormCreateUserMode"
                    @click="create"
                  >
                    Salvar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!---- Modal Atualizar ---->

      <div
        class="vue-modal"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        v-if="isFormUpdateUserMode"
      >
        <div class="vue-modal-inner" role="document">
          <div class="vue-modal-content">
            <div class="info">
              <h5
                v-show="isFormUpdateUserMode"
                class="info-add"
                id="exampleModalLabel"
              >
                Salvar
              </h5>

              <span
                class="info-close"
                aria-hidden="true"
                @click.prevent="closeModalUpdate(false)"
                >×</span
              >
            </div>
            <form id="update-post-form" @submit.prevent="editUser(user)">
              <div class="form-container">
                <div class="container-info">
                  <div class="form-group-id">
                    <label for="title">ID</label>
                    <input
                      type="text"
                      id="id"
                      v-model="user.id"
                      name="title"
                      class="form-control"
                      placeholder="Digite um ID"
                    />
                  </div>
                  <div class="form-group-name">
                    <label for="title"> Nome </label>
                    <input
                      type="text"
                      id="name"
                      v-model="user.name"
                      name="title"
                      class="form-control"
                      placeholder="Digite um nome"
                    />
                  </div>
                </div>

                <div class="container-info">
                  <div class="form-group-age">
                    <label for="title"> Idade </label>
                    <input
                      type="number"
                      id="age"
                      v-model="user.age"
                      name="title"
                      class="form-control"
                      placeholder="0"
                    />
                  </div>
                  <div class="form-group-github">
                    <label for="title"> GitHub User </label>
                    <input
                      type="text"
                      id="github_user"
                      v-model="user.githubUser"
                      name="title"
                      class="form-control"
                      placeholder="Usuário do Github"
                    />
                  </div>
                </div>

                <div class="container-info">
                  <div class="form-group-cep">
                    <label for="title"> CEP </label>
                    <input
                      type="text"
                      id="cep"
                      v-model="user.cep"
                      name="title"
                      max-length="8"
                      class="form-control"
                      placeholder="0000000"
                    />
                  </div>
                  <div class="form-group-state">
                    <label for="title"> Estado </label>
                    <select
                      class="selectpicker form-control"
                      data-live-search="true"
                      name="title"
                      id="state"
                      v-model="user.state"
                    >
                      <option value="" disabled selected>---</option>
                      <option value="AC">Acre</option>
                      <option value="AL">Alagoas</option>
                      <option value="AP">Amapá</option>
                      <option value="AM">Amazonas</option>
                      <option value="BA">Bahia</option>
                      <option value="CE">Ceará</option>
                      <option value="DF">Distrito Federal</option>
                      <option value="ES">Espírito Santo</option>
                      <option value="GO">Goiás</option>
                      <option value="MA">Maranhão</option>
                      <option value="MT">Mato Grosso</option>
                      <option value="MS">Mato Grosso do Sul</option>
                      <option value="MG">Minas Gerais</option>
                      <option value="PR">Paraná</option>
                      <option value="PB">Paraíba</option>
                      <option value="PA">Pará</option>
                      <option value="PE">Pernambuco</option>
                      <option value="PI">Piauí</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="RN">Rio Grande do Norte</option>
                      <option value="RS">Rio Grande do Sul</option>
                      <option value="RO">Rondônia</option>
                      <option value="RR">Roraima</option>
                      <option value="SC">Santa Catarina</option>
                      <option value="SE">Sergipe</option>
                      <option value="SP">São Paulo</option>
                      <option value="TO">Tocantins</option>
                    </select>
                  </div>
                  <div class="form-group-city">
                    <label for="title"> Cidade </label>
                    <input
                      type="text"
                      id="city"
                      v-model="user.city"
                      name="title"
                      class="form-control"
                      placeholder="Selecione a cidade"
                    />
                  </div>
                  <div class="form-group-district">
                    <label for="title"> Bairro </label>
                    <input
                      type="text"
                      id="district"
                      v-model="user.district"
                      name="title"
                      class="form-control"
                      placeholder="Selecione o bairro"
                    />
                  </div>
                </div>
                <div class="container-info">
                  <div class="form-group-street">
                    <label for="title"> Rua </label>
                    <input
                      type="text"
                      id="street"
                      v-model="user.street"
                      name="title"
                      class="form-control"
                      placeholder="Jardinete Juventina"
                    />
                  </div>
                  <div class="form-group-number">
                    <label for="title"> Número </label>
                    <input
                      type="text"
                      id="number"
                      v-model="user.number"
                      name="title"
                      class="form-control"
                      placeholder="--"
                    />
                  </div>
                  <div class="form-group-complement">
                    <label for="title"> Complemento </label>
                    <input
                      type="text"
                      id="complement"
                      v-model="user.complement"
                      name="title"
                      class="form-control"
                      placeholder="--"
                    />
                  </div>
                </div>
              </div>
              <div class="button-container">
                <div class="form-group">
                  <button
                    class="btn-cancel"
                    type="button"
                    data-dismiss="modal"
                    @click.prevent="closeModalUpdate(false)"
                  >
                    Cancelar
                  </button>
                </div>
                <div class="form-group">
                  <button
                    class="btn-save"
                    type="submit"
                    v-show="isFormUpdateUserMode"
                    @click="update(user)"
                  >
                    Atualizar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!---- Modal Deletar --->
      <div
        class="vue-modal"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        v-if="deleteModal"
      >
        <div class="vue-modal-inner-delete" role="document">
          <div class="vue-modal-content">
            <div class="info-delete">
              <h5
                v-show="deleteModal"
                class="info-add margin-delete"
                id="exampleModalLabel"
              >
                Excluir
              </h5>
              <div
                class="info-close"
                aria-hidden="true"
                @click.prevent="deleteModal = false"
              >
                x
              </div>
            </div>
            <div class="warning-text">
              <span>Confirma a exclusão deste registro?</span>
            </div>
            <div class="button-container-delete">
              <div class="form-group">
                <button
                  class="btn-cancel-delete"
                  type="button"
                  data-dismiss="modal"
                  @click.prevent="deleteModal = false"
                >
                  Cancelar
                </button>
              </div>
              <div class="form-group">
                <button
                  class="btn-delete"
                  type="submit"
                  @click="deleteUserAPI(user)"
                >
                  Excluir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { server } from "../helper";
import axios from "axios";

export default {
  data() {
    return {
      users: [],
      isFormCreateUserMode: false,
      isFormUpdateUserMode: false,
      deleteModal: false,
      urlViaCep: "https://viacep.com.br/ws/",
      response: null,
      id: "",
      name: "",
      age: "",
      githubUser: "",
      cep: "",
      state: "",
      city: "",
      district: "",
      street: "",
      number: "",
      complement: "",
      user: {
        id: "",
        name: "",
        age: "",
        githubUser: "",
        cep: "",
        state: "",
        city: "",
        district: "",
        street: "",
        number: "",
        complement: "",
      },
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    openModal(isModal) {
      this.isFormCreateUserMode = isModal;
    },
    openModalUpdate(isModal) {
      this.isFormUpdateUserMode = isModal;
    },
    closeModal(isModal) {
      this.openModal(isModal);
    },
    closeModalUpdate(isModal) {
      this.openModalUpdate(isModal);
    },
    addUser(isModal) {
      this.user = {};
      this.openModal(isModal);
    },
    editUser(user) {
      if (user) {
        this.user = user;
        this.openModalUpdate(true);
      }
    },
    deleteUser(user) {
      if (user) {
        this.user = user;
        this.deleteModal = true;
      }
    },
    fetchUsers() {
      axios
        .get(`${server.baseURL}/user/users`)
        .then((data) => (this.users = data.data));
    },
    deleteUserAPI(user) {
      axios.delete(`${server.baseURL}/user/${user._id}`).then((data) => {
        console.log(data);
        this.fetchUsers();
        this.deleteModal = false;
      });
    },
    onKeydown: function (e) {
      if (
        (e.keyCode >= 48 && e.keyCode <= 57) ||
        (e.keyCode >= 96 && e.keyCode <= 105) ||
        /^(8|9|13|46|37|39|17)$/.test(e.keyCode) ||
        (/^(67|86|88|65|90)$/.test(e.keyCode) && e.ctrlKey)
      )
        return;
      e.preventDefault();
      e.stopPropagation();
    },
    viacepURL(cep) {
      return "https://viacep.com.br/ws/" + cep + "/json/";
    },
    onKeyup: function () {
      this.street = "";
      this.district = "";
      this.city = "";
      this.state = "";
      this.number = "";
      this.complement = "";

      if (!/^[0-9]{8}$/.test(this.cep)) return;
      console.log("tese");
      // eslint-disable-next-line no-unused-vars
      var that = this;
      axios.get(`${this.urlViaCep}${this.cep}/json/`).then((resp) => {
        this.street = resp.data.logradouro;
        this.district = resp.data.bairro;
        this.city = resp.data.localidade;
        this.state = resp.data.uf;
      });
    },
    create() {
      const userData = {
        id: this.id,
        name: this.name,
        age: this.age,
        githubUser: this.githubUser,
        cep: this.cep,
        state: this.state,
        city: this.city,
        district: this.district,
        street: this.street,
        number: this.number,
        complement: this.complement,
      };

      // eslint-disable-next-line no-unused-vars
      axios.post(`${server.baseURL}/user/create`, userData).then((_) => {
        this.closeModal(false);
        this.fetchUsers();
      });
    },
    update(user) {
      const userData = {
        id: this.user.id,
        name: this.user.name,
        age: this.user.age,
        githubUser: this.user.githubUser,
        cep: this.user.cep,
        state: this.user.state,
        city: this.user.city,
        district: this.user.district,
        street: this.user.street,
        number: this.user.number,
        complement: this.user.complement,
      };

      // eslint-disable-next-line no-unused-vars
      axios.put(`${server.baseURL}/user/${user._id}`, userData).then((_) => {
        console.log(userData);
        this.closeModalUpdate(false);
        this.fetchUsers();
      });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap");

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}

.info-text {
  width: 95%;
  margin-top: 30px;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

.description {
  display: flex;
  flex-flow: column nowrap;
}

.title {
  font-family: "Poppins";
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 14px;
  color: #0000008a;
}

*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}

.input-search {
  background: url("../assets/magnifier-tool-black.svg") no-repeat scroll 15px
    10px;
  background-color: #ffff;
  border-radius: 6px;
  border: none;
  border: 1px solid #dfe3e6;
  font-size: 14px;
  padding: 8px 0 8px 45px;
  outline: none;
  width: 170px;
  height: 40px;
}

.container {
  background-color: #f4f5f7;
  width: calc(100vw - 70px);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.btn-margin {
  margin: 10px 0;
}

.header-table {
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container-table {
  background-color: #fff;
  border: 1px solid #dfe3e6;
  border-radius: 10px;
  margin-top: 20px;
  width: 97%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

.table-users {
  width: 98%;
  font-size: 14px;
  border: 1px solid #dfe3e6;
  border-radius: 10px;
  margin-bottom: 15px;
}

.thead-users {
  background-color: #f2f3f5;
  border: 1px solid #dfe3e6;
}

.thead-users th {
  color: #0000008a;
  padding: 10px 20px;
}

td {
  color: #0000008a;
  padding: 10px 20px;
  border-bottom: 1px solid #dfe3e6;
}

tr:hover {
  transition: 0.5s;
  background: #f9fafb;
  box-shadow: 0px 3px 6px #00000014;
}

.info {
  display: flex;
  justify-content: space-between;
}

.info-delete {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dfe3e6;
  margin-bottom: 30px;
  padding-bottom: 30px;
}

.warning-text {
  margin: 20px 0;
}

.info-close {
  background-color: #dddfe5;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 100%;
  font-weight: 300;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-add {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
}

.vue-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: rgba(0, 0, 0, 0.54);
  z-index: 10;
}

.vue-modal-inner {
  max-width: 680px;
  max-height: 474px;
  margin: 2rem auto;
}

.vue-modal-inner-delete {
  max-width: 367px;
  max-height: 210px;
  margin: 2rem auto;
}

.vue-modal-content {
  position: relative;
  background-color: #fff;
  box-shadow: 0px 6px 40px #00000029;
  padding: 25px 20px;
  border-radius: 10px;
  border: 1px solid #dfe3e6;
  background-clip: padding-box;
}

.container-info {
  margin: 15px 0;
  display: flex;
  width: 95%;
}

.form-group-name {
  width: 1500px;
  margin: 0 0 0 10px;
}

.form-group-github {
  margin: 0 0 0 10px;
}

.form-group-cep {
  margin: 0 10px 0 0;
}

.form-group-state {
  margin: 0 10px 0 0;
}

.form-group-city {
  margin: 0 10px 0 0;
}

.form-group-district {
}

.form-group-street {
  margin: 0 10px 0 0;
}

.form-group-number {
  margin: 0 10px 0 0;
}

.form-group-complement {
}

.form-container {
  border-top: 2px solid #dfe3e6;
  border-bottom: 1px solid #dfe3e6;
  margin: 15px 0;
}

.button-container-delete {
  display: flex;
  justify-content: end;
  padding-top: 20px;
  margin-top: 30px;
  border-top: 2px solid #dfe3e6;
}

.button-container {
  display: flex;
  justify-content: end;
}

.btn-cancel {
  border: 1px solid #e2b874;
  background-color: #ffffff;
  color: #e2b874;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 0px 3px 3px #00000029;
  margin: 0 15px 0 0;
  cursor: pointer;
}

.btn-cancel-delete {
  border: 1px solid #d83636;
  background-color: #ffffff;
  color: #d83636;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 0px 3px 3px #00000029;
  margin: 0 15px 0 0;
  cursor: pointer;
}

.btn-save {
  background-color: #e2b874;
  border: 1px solid #e2b874;
  color: #ffff;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 0px 3px 3px #00000029;
  cursor: pointer;
}

.btn-delete {
  background-color: #d83636;
  border: 1px solid #d83636;
  color: #ffff;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 0px 3px 3px #00000029;
  cursor: pointer;
}

label {
  font-size: 12px;
}

input {
  text-indent: 10px;
  font-size: 12px;
}
</style>
