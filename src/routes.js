import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Course from "./pages/course/Course";
import Login from "./pages/login/Login";
import Panel from "./pages/panel/Panel";
import Article from "./pages/article/Article";
import Setting from "./pages/setting";
import PrivateRoute from "./components/PrivateRoute";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  {
    path: "/article/*",
    element: <Article />,
    children: [
      {
        path: "Early history",
        element: (
          <div>
            <h2>Early history</h2>
            <p
              style={{
                textAlign: "justify",
                padding: "30px 80px",
                direction: "ltr",
              }}
            >
              The theory of the animated cartoon preceded the invention of the
              cinema by half a century. Early experimenters, working to create
              conversation pieces for Victorian parlours or new sensations for
              the touring magic-lantern shows, which were a popular form of
              entertainment, discovered the principle of persistence of vision.
              If drawings of the stages of an action were shown in fast
              succession, the human eye would perceive them as a continuous
              movement. One of the first commercially successful devices,
              invented by the Belgian Joseph Plateau in 1832, was the
              phenakistoscope, a spinning cardboard disk that created the
              illusion of movement when viewed in a mirror. In 1834 William
              George Horner invented the zoetrope, a rotating drum lined by a
              band of pictures that could be changed. The Frenchman Émile
              Reynaud in 1876 adapted the principle into a form that could be
              projected before a theatrical audience. Reynaud became not only
              animation’s first entrepreneur but, with his gorgeously
              hand-painted ribbons of celluloid conveyed by a system of mirrors
              to a theatre screen, the first artist to give personality and
              warmth to his animated characters.
            </p>
          </div>
        ),
      },
      {
        path: "Walt Disney",
        element: (
          <div>
            <h2>Walt Disney</h2>
            <p
              style={{
                textAlign: "justify",
                padding: "30px 80px",
                direction: "ltr",
              }}
            >
              This lesson did not go unremarked by the young Walt Disney, then
              working at his Laugh-O-gram Films studio in Kansas City, Missouri.
              His first major character, Oswald the Lucky Rabbit, was a
              straightforward appropriation of Felix; when he lost the rights to
              the character in a dispute with his distributor, Disney simply
              modified Oswald’s ears and produced Mickey Mouse.
            </p>
          </div>
        ),
      },
      {
        path: "Termite Terrace",
        element: (
          <div>
            <h2>Termite Terrace</h2>
            <p
              style={{
                textAlign: "justify",
                padding: "30px 80px",
                direction: "ltr",
              }}
            >
              Less edgy than the Fleischers but every bit as anarchic were the
              animations produced by the Warner Bros. cartoon studio, known to
              its residents as “Termite Terrace.” The studio was founded by
              three Disney veterans, Rudolph Ising, Hugh Harmon, and Friz
              Freleng, but didn’t discover its identity until Tex Avery, fleeing
              the Walter Lantz studio at Universal, joined the team as a
              director. Avery was young and irreverent, and he quickly
              recognized the talent of staff artists such as Chuck Jones, Bob
              Clampett, and Bob Cannon. Together they brought a new kind of
              speed and snappiness to the Warners product, beginning with Gold
              Diggers of ’49 (1936). With the addition of director Frank
              Tashlin, musical director Carl W. Stalling, and voice interpreter
              Mel Blanc, the team was in place to create a new kind of cartoon
              character: cynical, wisecracking, and often violent, who, refined
              through a series of cartoons, finally emerged as Bugs Bunny in Tex
              Avery’s A Wild Hare (1940). Other characters, some invented and
              some reinterpreted, arrived, including Daffy Duck, Porky Pig,
              Tweety and Sylvester, Pepe LePew, Foghorn Leghorn, Road Runner,
              and Wile E. Coyote. Avery left Warner Brothers and in 1942 joined
              Metro-Goldwyn-Mayer’s moribund animation unit, where, if anything,
              his work became even wilder in films such as Red Hot Riding Hood
              (1943) and Bad Luck Blackie (1949).
            </p>
          </div>
        ),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  {
    path: "/panel",
    element: 
      <PrivateRoute>
        <Panel />
      </PrivateRoute>
  
  },
  { path: "/course/:courseId", element: <Course /> },
  {
    path: "/Setting",
    element: 
      <PrivateRoute>
        <Setting />
      </PrivateRoute>

  },
];

export default routes;
