import '../assets/styles/footer.styl'
export default {
    data() {
        return{
            author: 'temple'
        }
    },
    render() {
        return (
            <div id="footer">
                <span>written by {this.author}</span>
            </div>
        )
    }
}