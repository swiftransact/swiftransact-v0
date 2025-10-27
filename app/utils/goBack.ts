export default () => {
    const router = useRouter();
    if(window.history.length > 1) {
        router.back();
    }else{
        router.push('/');
    }
}
