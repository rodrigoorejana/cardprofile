import Profile from "./components/profile";

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar="./profile.jpeg"
        name="Rodrigo Orejana da Costa"
        bio="Front-end javascript developer "
        email="rodrigoorejana.rc@gmail.com"
        phone="+55 (67) 99626-2444"
        githubUrl="https://github.com/rodrigoorejana"
        linkedinUrl="https://linkedin.com/in/rodrigo-orejana-da-costa/"
        twitterUrl="https://x.com/"
      />
    </div>
  )
}