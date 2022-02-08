const logout = async() => {
    const res = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });

    if (res.ok) {
        location.replace('/');
    } else {
        alert(res)
    }
}

document.querySelector('#logoutBtn').addEventListener('click', logout)