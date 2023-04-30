// BEGIN
export let getMutualFriends = (user1, user2) => {
    return user1.getMutualFriends(user2);
};
// END

export default ({ id = null, friends = [] } = {}) => ({
    friends,
    id,
    getMutualFriends(other) {
        let id_friends_user = other.getFriends().map(el => el.id);
        return this.getFriends().reduce((prev, curr) => {
            if (id_friends_user.includes(curr.id)) {
                prev.push(curr);
            }
            return prev;
        }, [])
    },
    getFriends() {
        return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
    },
});