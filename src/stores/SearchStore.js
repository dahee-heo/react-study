import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { axiosError } from './common.js';
import { membersStore } from './MembersStore.js';

export default class SearchStore {
  constructor() {
    makeAutoObservable(this);
  }

  searchRead(q) {
    const url = `http://localhost:3100/api/v1/search?q=${q}`;
    axios.get(url).then((response) => {
      console.log('Done searchRead', response);
      membersStore.members = response.data.members;
    }).catch((error) => {
      axiosError(error);
    });
  }
}

export const searchStore = new SearchStore();
