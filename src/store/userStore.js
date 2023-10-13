import { reactive } from "vue";
import router from "../router";
const userDetails = reactive({
  name: "abdur rahim",
  profileImage: "/orginal-arahim.jpg",
  birthDate: "1991-09-07",
  email: "arahimcse@gmail.com",
  description: "this is the bio of abdur rahim",
  update() {
    router.push({ path: "/" });
    
  },
});

export { userDetails };
