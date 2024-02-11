export async function loadFragment(root: HTMLElement) {
    const template = root.getAttribute("data-fragment");

    const htmlUrl = `${template}/index.html`;

    try {
        const html = await fetch(htmlUrl).then((res) => res.text());
        root.innerHTML = html;
    } catch {
        // 리포트 서버로 에러 전송

        root.innerHTML = `<div class="error">에러입니다</div>`;
    }
}
