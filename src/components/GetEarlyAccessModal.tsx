import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { showSuccess } from '@/utils/toast';

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

interface GetEarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetEarlyAccessModal: React.FC<GetEarlyAccessModalProps> = ({ isOpen, onClose }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Early access request:", values);
    showSuccess("Thank you! You've been added to the early access list.");
    form.reset();
    onClose();
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get Early Access</DialogTitle>
          <DialogDescription>
            Be the first to know when OmniAgent launches. Enter your email below to join our waitlist.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pt-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="you@company.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white">
              Join Waitlist
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default GetEarlyAccessModal;