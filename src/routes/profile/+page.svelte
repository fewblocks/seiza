<script lang="ts">
	import { onMount } from 'svelte';
	import type { TransitionConfig } from 'svelte/transition';
	import * as Card from '$lib/components/ui/card';

	// プロフィール情報（あとで実際の情報に書き換えてください）
	const profile = {
		name: 'Tomoru Nishie',
		title: 'Frontend, Backend Engineer',
		bio: `今回始めてSvelteを触ってみました。題材は何にするか迷ったのですが...小学校の頃に配られた「星座早見盤」を作ってみました！
日本天文学会が編集した『星座早見』が、1907年（明治40年）9月に初版発行されたのが最初とされているそうで、
1950年代（昭和20年代後半〜30年代）になり、宇宙への関心が高まったことで、学校教育や一般向けに多様な製品が広く普及しました。
そんな100年以上の長い歴史のあるアイテムを、最新のWeb技術で再現してみました。
ぜひ色々触ってみてください！`,
		github: 'https://github.com/fewblocks/seiza',
		qiita: 'https://qiita.com/mark_posts_stocker'
	};

	const skills = [
		'JavaScript',
		'TypeScript',
		'jQuery',
		'Svelte',
		'Next.js',
		'React',
		'Vue',
		'Node.js',
		'Java',
		'PHP',
		'Laravel',
		'MySQL',
		'Git'
	];

	const links = [
		{ title: 'GitHub', url: profile.github, icon: '💻' },
		{ title: 'Qiita', url: profile.qiita, icon: '📚' }
	];

	let titleVisible = $state(false);
	let profileVisible = $state(false);
	let skillsVisible = $state(false);
	let linksVisible = $state(false);

	let titleElement: HTMLDivElement;
	let profileElement: HTMLDivElement;
	let skillsElement: HTMLDivElement;
	let linksElement: HTMLDivElement;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	function revealIn(node: HTMLDivElement): TransitionConfig {
		return {
			duration: 700,
			css: (t) => {
				const eased = 1 - Math.pow(1 - t, 3);
				return `
					transform: translateY(${24 * (1 - eased)}px);
					opacity: ${eased};
				`;
			}
		};
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;

					if (entry.target === titleElement) titleVisible = true;
					if (entry.target === profileElement) profileVisible = true;
					if (entry.target === skillsElement) skillsVisible = true;
					if (entry.target === linksElement) linksVisible = true;

					observer.unobserve(entry.target);
				});
			},
			{
				threshold: 0.1,
				rootMargin: '40px'
			}
		);

		if (titleElement) observer.observe(titleElement);
		if (profileElement) observer.observe(profileElement);
		if (skillsElement) observer.observe(skillsElement);
		if (linksElement) observer.observe(linksElement);

		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>プロフィール</title>
</svelte:head>

<div class="profile-container">
	<div class="profile-content">
		<div bind:this={titleElement}>
			{#if titleVisible}
				<div in:revealIn>
					<h1 class="profile-title">プロフィール</h1>
				</div>
			{/if}
		</div>

		<!-- プロフィールカード -->
		<div bind:this={profileElement}>
			{#if profileVisible}
				<div in:revealIn>
					<Card.Root class="mb-6">
						<Card.Header>
							<Card.Title>{profile.name}</Card.Title>
							<Card.Description>{profile.title}</Card.Description>
						</Card.Header>
						<Card.Content>
							<div>
								<h3 class="text-lg font-semibold mb-2">本アプリケーションについて</h3>
								<p class="text-muted-foreground">{profile.bio}</p>
							</div>
						</Card.Content>
					</Card.Root>
				</div>
			{/if}
		</div>

		<!-- スキルカード -->
		<div bind:this={skillsElement}>
			{#if skillsVisible}
				<div in:revealIn>
					<Card.Root class="mb-6">
						<Card.Header>
							<Card.Title>スキル・技術</Card.Title>
						</Card.Header>
						<Card.Content>
							<div class="skills-grid">
								{#each skills as skill (skill)}
									<span class="skill-tag">{skill}</span>
								{/each}
							</div>
						</Card.Content>
					</Card.Root>
				</div>
			{/if}
		</div>

		<!-- リンクカード -->
		<div bind:this={linksElement}>
			{#if linksVisible}
				<div in:revealIn>
					<Card.Root>
						<Card.Header>
							<Card.Title>リンク</Card.Title>
							<Card.Description>GitHub・技術記事など</Card.Description>
						</Card.Header>
						<Card.Content>
							<div class="links-grid">
								{#each links as link (link.url)}
									<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
									<a href={link.url} target="_blank" rel="noopener noreferrer" class="link-card">
										<span class="link-icon">{link.icon}</span>
										<span class="link-title">{link.title}</span>
									</a>
								{/each}
							</div>
						</Card.Content>
					</Card.Root>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.profile-container {
		display: flex;
		justify-content: center;
		padding: 2rem 1rem;
		min-height: calc(100vh - 60px);
	}

	.profile-content {
		width: 100%;
		max-width: 800px;
	}

	.profile-title {
		font-size: 2.5rem;
		font-weight: bold;
		margin-bottom: 2rem;
		text-align: center;
	}

	.skills-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.skill-tag {
		padding: 0.5rem 1rem;
		background-color: var(--color-secondary);
		border-radius: 0.5rem;
		font-size: 0.875rem;
		transition: background-color 0.2s;
	}

	.skill-tag:hover {
		background-color: var(--color-accent);
	}

	.links-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 1rem;
	}

	.link-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1.5rem;
		border: 2px solid var(--color-border);
		border-radius: 0.5rem;
		text-decoration: none;
		color: inherit;
		transition: all 0.2s;
	}

	.link-card:hover {
		background-color: var(--color-accent);
		border-color: var(--color-primary);
		transform: translateY(-2px);
	}

	.link-icon {
		font-size: 2rem;
		margin-bottom: 0.5rem;
	}

	.link-title {
		font-weight: 500;
	}

	@media (max-width: 600px) {
		.profile-title {
			font-size: 2rem;
		}

		.links-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
