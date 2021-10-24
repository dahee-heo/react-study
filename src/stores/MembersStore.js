import { configure, makeAutoObservable } from 'mobx';
import axios from 'axios';
import { axiosError } from './common.js';

configure({
  enforceActions: 'never',
  useProxies: 'never'
});

export default class MembersStore {
  constructor() {
    makeAutoObservable(this);
  }

  members = [];
  member = {
    name: '',
    age: ''
  };

  membersCreate() {
    axios.post('http://localhost:3100/api/v1/members', this.member).then((response) => {
      console.log('Done membersCreate', response);
      this.membersRead();
    }).catch((error) => {
      axiosError(error);
    });
  }

  membersRead() {
    axios.get('http://localhost:3100/api/v1/members').then((response) => {
      console.log('Done membersRead', response);
      this.members = response.data.members;
    }).catch((error) => {
      axiosError(error);
    });
  }

  membersUpdate(index, member) {
    axios.patch('http://localhost:3100/api/v1/members/' + index, member).then((response) => {
      console.log('Done membersUpdate', response);
      this.membersRead();
    }).catch((error) => {
      axiosError(error);
    });
  }

  membersDelete(index) {
    this.members.splice(index, 1);
    console.log('Done membersDelete', this.members);
  }  
}

export const membersStore = new MembersStore();
