"use client"

import { cn } from "cn"
import { XIcon } from "lucide-react"
import { Dialog as DialogPrimitive } from "radix-ui"
import * as React from "react"

import { Button } from "@/components/ui/button"

function ModalTrigger({
	...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
	return <DialogPrimitive.Trigger data-slot="modal-trigger" {...props} />
}

function ModalClose({
	...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
	return <DialogPrimitive.Close data-slot="modal-close" {...props} />
}

function ModalDescription({
	className,
	...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
	return (
		<DialogPrimitive.Description
			data-slot="modal-description"
			className={cn("text-sm leading-5 text-muted-foreground", className)}
			{...props}
		/>
	)
}

type ModalProps = React.ComponentProps<typeof DialogPrimitive.Root> & {
	title: string
	className?: string
	showCloseButton?: boolean
}

function Modal({
	title,
	className,
	showCloseButton = true,
	children,
	...props
}: ModalProps) {
	return (
		<DialogPrimitive.Root data-slot="modal" {...props}>
			<DialogPrimitive.Portal data-slot="modal-portal">
				<DialogPrimitive.Overlay
					data-slot="modal-overlay"
					className="fixed inset-0 z-50 bg-background-scrim duration-150 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0"
				/>
				<DialogPrimitive.Content
					data-slot="modal-content"
					className={cn(
						"fixed top-1/2 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-[440px] -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-lg bg-modal p-6 text-foreground shadow-xl duration-150 outline-none",
						"data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
						"data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
						className,
					)}
				>
					<div
						data-slot="modal-header"
						className="flex items-start justify-between gap-4"
					>
						<DialogPrimitive.Title
							data-slot="modal-title"
							className="text-xl leading-6 font-bold"
						>
							{title}
						</DialogPrimitive.Title>
						{showCloseButton ? (
							<DialogPrimitive.Close asChild>
								<Button
									variant="ghost"
									size="icon"
									className="-mt-1 -mr-1 shrink-0 text-muted-foreground hover:text-foreground"
								>
									<XIcon />
									<span className="sr-only">Закрыть</span>
								</Button>
							</DialogPrimitive.Close>
						) : null}
					</div>

					{children}
				</DialogPrimitive.Content>
			</DialogPrimitive.Portal>
		</DialogPrimitive.Root>
	)
}

export {
	Modal,
	ModalClose,
	ModalDescription,
	ModalTrigger,
	type ModalProps,
}
