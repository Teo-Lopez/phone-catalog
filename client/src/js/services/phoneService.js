import axios from "axios";

class PhoneService {
  constructor() {
    this.service = axios.create({
      timeout: 10000,
      withCredentials: true,
      baseURL: "https://phone-catalogue-practice.herokuapp.com/"
    });
  }

  fetchPhones() {
    return this.service
      .get("phones")
      .then(res => res.data)
      .catch(err => err);
  }

  fetchPhoneByID(id) {
    return this.service
      .get(`phone/${id}`)
      .then(res => res.data)
      .catch(err => console.log(err));
  }
}

export default PhoneService;
