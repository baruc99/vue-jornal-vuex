
export default () => ({
    isLoading: true,
    entries:[
        {
            id: new Date().getTime,
            date: new Date().toDateString,
            text: 'Nostrud ipsum laboris officia cillum irure. Voluptate cupidatat non occaecat elit quis occaecat eu. Magna minim reprehenderit aliquip exercitation qui eu exercitation elit laboris. Ut occaecat ea laboris aliquip.',
            picture: null
        },
        {
            id: new Date().getTime() + Math.floor(Math.random() * 100) + 1,
            date: new Date().toDateString,
            text: 'Et nulla duis culpa mollit velit et in commodo laboris. Proident Lorem ipsum incididunt ad magna culpa mollit dolore magna cupidatat voluptate dolor. Id aute eu anim non veniam laborum. Ut amet nulla id non consectetur qui labore proident. Adipisicing minim est enim quis laborum sit mollit Lorem velit excepteur occaecat anim.',
            picture: null
        },
        {
            id: new Date().getTime() + Math.floor(Math.random() * 100) + 1,
            date: new Date().toDateString,
            text: 'Pariatur esse duis magna Lorem ullamco cillum mollit nostrud. Eu nostrud incididunt mollit et ad anim excepteur et mollit fugiat non dolor. Proident tempor ea laborum cillum esse proident qui nostrud consectetur nulla. Labore occaecat anim aute cupidatat pariatur incididunt elit pariatur sit adipisicing commodo veniam fugiat. Aliquip exercitation amet irure do dolore mollit qui dolore eiusmod ullamco occaecat occaecat.',
            picture: null
        },
    ]
})