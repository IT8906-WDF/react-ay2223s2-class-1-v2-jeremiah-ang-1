import Hobby from '../Practical 3/Hobby';

export default function HobbyList(props) {
    return props.hobbies
        .filter(function (hobby) {
            return hobby.emoji;
        })
        .map(function (hobby, index) {
            return <Hobby key={index} title={hobby.title} emoji={hobby.emoji} />;
        });
}
