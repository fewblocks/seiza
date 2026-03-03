<script lang="ts">
	import { onMount } from 'svelte';
	import type { TransitionConfig } from 'svelte/transition';
	import * as Card from '$lib/components/ui/card';

	// プロフィール情報（あとで実際の情報に書き換えてください）
	const profile = {
		name: 'Your Name',
		title: 'Software Engineer',
		company: '所属会社名',
		bio: '自己紹介文をここに書いてください。あなたの経験やスキル、興味のある技術などを記載できます。',
		github: 'https://github.com/yourusername',
		twitter: 'https://twitter.com/yourusername',
		zenn: 'https://zenn.dev/yourusername',
		qiita: 'https://qiita.com/yourusername'
	};

	const skills = ['JavaScript', 'TypeScript', 'Svelte', 'React', 'Node.js', 'Python'];

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

	function revealIn(node: Element): TransitionConfig {
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
							<div class="mb-4">
								<h3 class="text-lg font-semibold mb-2">所属</h3>
								<p>{profile.company}</p>
							</div>
							<div>
								<h3 class="text-lg font-semibold mb-2">自己紹介</h3>
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
								{#each skills as skill}
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
								{#each links as link}
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
